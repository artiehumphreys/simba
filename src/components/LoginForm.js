import React from 'react';
import styles from '../css/LoginForm.module.css';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        if (username.value === "admin" && password.value === "admin") {
            navigate('/home')
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
            <button type="submit" className={styles.button} onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default LoginForm;
