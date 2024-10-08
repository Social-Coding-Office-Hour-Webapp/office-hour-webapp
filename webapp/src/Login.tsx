// src/components/Login.js
import React from 'react';
import './Login.css'; 

function Login() {
    return (
        <div className="login-container">
            <div className="header">
                <div className="section-logo"> </div>
                <div className="university-logo">
                    <img src="/UMN_logo.png" alt="UMN logo" />
                    <h1>University of Minnesota Office Hours</h1>
                </div>
            </div>
            <div className="login-box">
                <form>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="id" placeholder="Enter your ID" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />

                    <button type="submit" className="login-btn">Login</button>
                </form>
                <div className="register">
                    <a href="/register">Register?</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
