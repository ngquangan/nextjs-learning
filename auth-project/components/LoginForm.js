import React, { useState } from 'react';
import { loginUser } from '../lib/auth';
const LoginForm = () => {

  const [auth, setAuth] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAuth({
      ...auth,
      [name]: value,
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = auth;
    loginUser(email, password);
  }
 
  return (
    <form
      onSubmit = {handleSubmit}
    >
      <div>
        <input
          type = "email"
          name = "email"
          placeholder = "email"
          value = {auth.email}
          onChange = {handleChange}
          required
        />
      </div>
      <div>
        <input
          type = "password"
          name = "password"
          placeholder = "password"
          value = {auth.password}
          onChange = {handleChange}
          required
        />
      </div>
      <button type = "submit">Login</button>
    </form>
  )
};

export default LoginForm;