// pages/ReturnBook.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function ReturnBook() {
  const navigate = useNavigate();
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState('');

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const issued = storedBooks.filter(book => book.status === 'Issued');
    setIssuedBooks(issued);
  }, []);

  const handleReturn = (e) => {
    e.preventDefault();

    const allBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = allBooks.map(book => {
      if (book.id === parseInt(selectedBookId)) {
        return { ...book, status: 'Available', issuedTo: null, issuedDate: null };
      }
      return book;
    });

    localStorage.setItem('books', JSON.stringify(updatedBooks));

    alert('Book returned successfully!');
    navigate('/admin/dashboard');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Return Book</h1>
      <form className="login-form" onSubmit={handleReturn}>
        <label>Select Issued Book:</label>
        <select value={selectedBookId} onChange={(e) => setSelectedBookId(e.target.value)} required>
          <option value="">Select Book</option>
          {issuedBooks.map(book => (
            <option key={book.id} value={book.id}>
              {book.title} (Issued to: {book.issuedTo})
            </option>
          ))}
        </select>
        <button type="submit">Return Book</button>
      </form>
    </div>
  );
}

export default ReturnBook;
