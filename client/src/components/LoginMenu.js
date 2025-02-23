import React from 'react'
import './LoginMenu.css';
import { Link } from "react-router-dom";


const LoginMenu = () => {
  return (
    <div className="menu">
      <h1>Login</h1>
      <p>Email</p>
      <input type="text" placeholder="Enter Email"></input>
      <p>Password</p>
      <input type="password" placeholder="Enter Password"></input>
      <Link to="/main">
        <button className="signIn">Sign In</button>
      </Link>
      <a href="/">Register</a>
      <a href="/">Forgot password?</a>
    </div>
  )
}

export default LoginMenu