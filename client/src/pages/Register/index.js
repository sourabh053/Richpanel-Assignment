import React, { useState } from 'react';
import './Register.css'

function Register() {
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
        <div className='register'>
            <div className="container">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <br />
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
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}

export default Register;
