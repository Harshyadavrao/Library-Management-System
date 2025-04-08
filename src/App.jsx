import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import IssueBook from './pages/IssueBook';
import ReturnBook from './pages/ReturnBook';
import Reports from './pages/Reports';
import UserManagement from './pages/UserManagement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/update-book/:id" element={<UpdateBook />} />
        <Route path="/issue-book" element={<IssueBook />} />
        <Route path="/return-book" element={<ReturnBook />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
