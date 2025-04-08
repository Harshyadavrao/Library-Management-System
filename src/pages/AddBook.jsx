import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const navigate = useNavigate();

  const handleAddBook = (e) => {
    e.preventDefault();
    const existingBooks = JSON.parse(localStorage.getItem('books')) || [];

    const newBook = {
      id: Date.now(),
      title,
      author,
      isbn,
      status: 'Available',
    };

    localStorage.setItem('books', JSON.stringify([...existingBooks, newBook]));
    alert('Book added successfully!');
    navigate('/books');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Add New Book</h1>
      <form className="login-form" onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
