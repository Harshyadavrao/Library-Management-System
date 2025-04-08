import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const selectedBook = storedBooks.find(b => b.id === parseInt(id));
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      alert('Book not found');
      navigate('/books');
    }
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = storedBooks.map(b => (b.id === book.id ? book : b));
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    alert('Book updated successfully!');
    navigate('/books');
  };

  if (!book) return null;

  return (
    <div className="page-container">
      <h1 className="page-title">Update Book</h1>
      <form className="login-form" onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Book Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={book.isbn}
          onChange={(e) => setBook({ ...book, isbn: e.target.value })}
          required
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default UpdateBook;
