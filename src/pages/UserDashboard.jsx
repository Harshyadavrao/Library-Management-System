// pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserDashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
      navigate('/');
    } else {
      setCurrentUser(user);

      const books = JSON.parse(localStorage.getItem('books')) || [];
      const userBooks = books.filter(book => book.issuedTo === user.email);
      setIssuedBooks(userBooks);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome, {currentUser.name || 'User'}!</h1>

      <h2>Your Issued Books:</h2>
      {issuedBooks.length > 0 ? (
        <table className="report-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Issued Date</th>
            </tr>
          </thead>
          <tbody>
            {issuedBooks.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.issuedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>You have not issued any books.</p>
      )}

      <button onClick={handleLogout} className="back-button">
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;
