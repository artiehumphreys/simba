import React from 'react';
import styles from './LoginForm.module.css';

function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <div style={{ background: '#121212', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className={styles.formContainer}>
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
            </div>
        </div>
    );
}

export default LoginForm;
