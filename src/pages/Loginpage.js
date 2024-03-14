import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from './Loginpage.module.css';
const logoPath = process.env.PUBLIC_URL + '/simba_logo.png';
//Logo is (0, 140, 180)

function LoginPage() {
    return (
        <div className="login-page">
            {/* <h2>Login to Your Account</h2> */}
            <div style={{ background: '#121212', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={styles.formContainer}>
                    <img src={logoPath} alt="Simba Logo">
                    </img>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;