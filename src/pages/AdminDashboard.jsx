import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Admin Dashboard</h1>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/add-book')}>Add Book</button>
        <button onClick={() => navigate('/books')}>Manage Books</button>
        <button onClick={() => navigate('/issue-book')}>Issue Book</button>
        <button onClick={() => navigate('/return-book')}>Return Book</button>
        <button onClick={() => navigate('/reports')}>View Reports</button>
        <button onClick={() => navigate('/user-management')}>User Management</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
