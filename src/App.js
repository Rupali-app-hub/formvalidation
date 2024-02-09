import React, { useState } from 'react';
import './App.css'; 
import TaskList from './TaskList';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validation checks
        const newErrors = {
            ...errors
        };

        if (name === 'name') {
            newErrors.name = value.trim() === '' ? 'Name is required.' : '';
        } else if (name === 'email') {
            newErrors.email = /^\S+@\S+\.\S+$/.test(value) ? '' : 'Valid email is required.';
        } else if (name === 'message') {
            newErrors.message = value.trim() === '' ? 'Message cannot be empty.' : '';
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form submission
        if (errors.name === '' && errors.email === '' && errors.message === '') {
            
            console.log('Form data:', formData);
            window.alert("Thank you for submiting")
        } else {
            console.log('Validation errors:', errors);
        }
    };

    return (
        <div className="container">
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    /><br />
                    <span className="error">{errors.name}</span><br />

                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    /><br />
                    <span className="error">{errors.email}</span><br />

                    <label htmlFor="message">Message:</label><br />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea><br />
                    <span className="error">{errors.message}</span><br />

                    <button type="submit">Submit</button>
                </form>
                <TaskList />
            </div>
        </div>
    );
}

export default App;
