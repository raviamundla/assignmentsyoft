import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: ''
  });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    try {
      const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        alert('Registration successful');
        navigate('/login'); // Navigate to Login page after successful registration
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_firstname"
          value={formData.user_firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="user_password"
          value={formData.user_password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="user_phone"
          value={formData.user_phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;

