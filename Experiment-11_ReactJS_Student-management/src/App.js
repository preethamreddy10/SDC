// CHONY Experiment 11 - Main App Component
// Author: Haswinchony Saladi (23AG1A0555)

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div className="app-root">
        <header className="chony-header">
          <div className="container header-flex">
            <div className="logo">
              <span className="chony-logo">CHONY</span>
              <span className="chony-sub">Student Management</span>
            </div>
            <nav>
              <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/register" className="nav-link">Register</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container main-content fade-in">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="chony-footer text-center">
          <div className="container">
            <span>© 2024 CHONY | Student Management System | Haswinchony Saladi (23AG1A0555)</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 