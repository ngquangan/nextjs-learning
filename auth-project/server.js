const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json()); // use json data from client

  server.get('*', (req, res) => { // Get all route GET from next
    return handle(req, res);
  });

  server.post('/api/login', (req, res) => {
    console.log(req.body);
    return res.status(200).json({
      success: true
    });
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log('Listening on PORT ' + port);
  })
})