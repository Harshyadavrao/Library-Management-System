// pages/UserLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.email === email);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/user/dashboard');
    } else {
      setError('User not found. Please check your email or contact admin.');
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">User Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}

export default UserLogin;
