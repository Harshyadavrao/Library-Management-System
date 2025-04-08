// pages/UserManagement.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserManagement() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setName('');
    setEmail('');
    alert('User added successfully!');
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User deleted successfully!');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">User Management</h1>

      <form className="login-form" onSubmit={handleAddUser}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Add User</button>
      </form>

      <h2 className="page-title">User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleDeleteUser(user.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/admin/dashboard')} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
}

export default UserManagement;
