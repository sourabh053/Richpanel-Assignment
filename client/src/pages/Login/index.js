import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here 
        console.log(formData);
    };
    return (
        <div className='login'>
            <div className="container">
                <h2>Login to your Account</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <br />
                    <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
                    <label htmlFor="rememberMe">Remember me</label>
                    <br />
                    <button type="submit" className="btn">Sign In</button>
                </form>
                <p>New to MyApp? <a href="/register">Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login