// CHONY Experiment 11 - Contact Page
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="card slide-in" style={{ maxWidth: 500, margin: '0 auto' }}>
      <h1 className="mb-20" style={{ color: 'var(--chony-red)' }}>Contact CHONY</h1>
      {submitted ? (
        <div className="text-center">
          <h3 style={{ color: 'var(--chony-red)' }}>Thank you for contacting us!</h3>
          <p>We'll get back to you soon.</p>
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
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              className="form-input"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Type your message..."
              rows={4}
            />
          </div>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact; 