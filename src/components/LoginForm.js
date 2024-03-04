import React from 'react';

function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
