import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function IssueBook() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const availableBooks = storedBooks.filter(book => book.status === 'Available');
    setUsers(storedUsers);
    setBooks(availableBooks);
  }, []);

  const handleIssue = (e) => {
    e.preventDefault();

    if (!selectedUser || !selectedBook) {
      alert('Please select both user and book.');
      return;
    }

    const allBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = allBooks.map(book => {
      if (book.id === parseInt(selectedBook)) {
        return { ...book, status: 'Issued', issuedTo: selectedUser, issuedDate: new Date().toLocaleDateString() };
      }
      return book;
    });

    localStorage.setItem('books', JSON.stringify(updatedBooks));

    alert('Book issued successfully!');
    navigate('/admin/dashboard');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Issue Book</h1>
      <form className="login-form" onSubmit={handleIssue}>
        <label>User:</label>
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>

        <label>Book:</label>
        <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)} required>
          <option value="">Select Book</option>
          {books.map(book => (
            <option key={book.id} value={book.id}>{book.title}</option>
          ))}
        </select>

        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
}

export default IssueBook;
