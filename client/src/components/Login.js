import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Login = (props) => {
  
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', user)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubblepage')
    })
    .catch(err => {
      console.error(err);
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Bubble App</h1>
        <input
        type='text'
        name='username'
        placeholder='Username'
        value={user.username}
        onChange={handleChange}
        />
        <input
        type='password'
        name='password'
        placeholder='Password'
        value={user.pasword}
        onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
