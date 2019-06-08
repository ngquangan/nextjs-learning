const next = require('next');
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

const CONSTANTS = {
  AUTH_USER_TYPE: "authenticated",
  COOKIE_SECRET: "dsjdfgjdrgjfgjgjfh",
  COOKIE_OPTION: {
    httpOnly: true,
    secure: !dev,
    signed: true,
  }
}

const authenticate = async (email, password) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  return data.find(user => {
    return user.email === email && user.website === password && user;
  })
}

app.prepare().then(() => {
  const server = express();

  server.use(express.json()); // use json data from client
  server.use(cookieParser(CONSTANTS.COOKIE_SECRET)); 

  server.get('/api/profile', async (req, res) => { // Should at top
    const { signedCookies: { token } } = req;

    if (token && token.email) {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      const user = data.find(user => {
        return user.email === token.email && user;
      })
      return res.status(200).json({
        success: true,
        user,
      })
    }

    return res.status(404).json({
      success: false
    })
  });

  server.get('*', (req, res) => { // Get all route GET from next
    return handle(req, res);
  });

  server.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await authenticate(email, password);
    if (!user) {
      return res.status(403).json({
        success: false,
        error: "Invalid email or password"
      })
    }

    const userData = {
      name: user.name,
      email: user.email,
      type: CONSTANTS.AUTH_USER_TYPE
    }

    res.cookie('token', userData, CONSTANTS.COOKIE_OPTION)

    return res.status(200).json({
      ...userData
    });
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log('Listening on PORT ' + port);
  })
})