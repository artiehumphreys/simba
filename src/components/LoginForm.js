import React from 'react';
import Home from '../App'
import styles from './LoginForm.module.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        if (username.value === "admin" && password.value === "admin") {
            return (
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input type="text" id="username" name="username" required className={styles.input} />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input type="password" id="password" name="password" required className={styles.input} />
            </div>
            <div>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me" className={styles.label} style={{ display: 'inline-block', marginLeft: '5px' }}>
                    Remember me
                </label>
            </div>
            <button type="submit" className={styles.button}>Login</button>
        </form>
    );
}

export default LoginForm;
