// CHONY Experiment 11 - Login Page
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card slide-in" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h1 className="mb-20" style={{ color: 'var(--chony-red)' }}>Login to CHONY</h1>
      {submitted ? (
        <div className="text-center">
          <h3 style={{ color: 'var(--chony-red)' }}>Login Successful!</h3>
          <p>Welcome back to CHONY Student Management.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} autoComplete="off">
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
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login; 