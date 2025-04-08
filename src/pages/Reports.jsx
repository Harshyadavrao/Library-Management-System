// pages/Reports.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Reports() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Library Reports</h1>

      <table className="report-table">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Status</th>
            <th>Issued To</th>
            <th>Issued Date</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.status}</td>
                <td>{book.issuedTo || 'N/A'}</td>
                <td>{book.issuedDate || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No books found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <button onClick={() => navigate('/admin/dashboard')} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
}

export default Reports;
