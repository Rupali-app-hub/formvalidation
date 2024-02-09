import React, { useState } from 'react';
import './App.css'; // Import the CSS file
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            message: ''
        };

        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Valid email is required.';
            isValid = false;
        }

        if (formData.message.trim() === '') {
            newErrors.message = 'Message cannot be empty.';
            isValid = false;
        }

        setErrors(newErrors);

        // Form submission
        if (isValid) {
            // Perform form submission action (e.g., display alert or send data to server)
            console.log('Form data:', formData);
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
