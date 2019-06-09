import React, { useState } from 'react';
import Router from 'next/router';

import { loginUser } from '../lib/auth';
const LoginForm = () => {

  const [auth, setAuth] = useState({
    email: "Shanna@melissa.tv",
    password: "anastasia.net"
  })

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAuth({
      ...auth,
      [name]: value,
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = auth;
    let isSuccess = false;
    setSuccess(true);
    try {
      isSuccess = await loginUser(email, password);
    } catch (err) {
      console.log(err);
      setError(err.response && err.response.data.error || err.message)
      isSuccess = false;
    }
    
    setSuccess(false);

    if (isSuccess) return Router.push('/profile');
    return
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
      <button disabled = {success} type = "submit">{ success ? "Sending" : "Login" }</button>
      {
        error && <div>{ error }</div>
      }
    </form>
  )
};

export default LoginForm;