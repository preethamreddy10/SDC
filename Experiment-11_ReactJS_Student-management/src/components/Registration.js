// CHONY Experiment 11 - Registration Page
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState } from 'react';

const Registration = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="card slide-in" style={{ maxWidth: 450, margin: '0 auto' }}>
      <h1 className="mb-20" style={{ color: 'var(--chony-red)' }}>Register for CHONY</h1>
      {submitted ? (
        <div className="text-center">
          <h3 style={{ color: 'var(--chony-red)' }}>Registration Successful!</h3>
          <p>Welcome to CHONY Student Management.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="confirm">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              id="confirm"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
            />
          </div>
          {error && <div style={{ color: 'var(--chony-red)', marginBottom: 12 }}>{error}</div>}
          <button className="btn btn-primary" type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Registration; 