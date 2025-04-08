import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const handleDelete = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Book List</h1>
      <button onClick={() => navigate('/add-book')}>Add New Book</button>
      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.status}</td>
                <td>
                  <button onClick={() => navigate(`/update-book/${book.id}`)}>Edit</button>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No books found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
