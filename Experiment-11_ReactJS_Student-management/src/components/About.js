// CHONY Experiment 11 - About Page
// Author: Haswinchony Saladi (23AG1A0555)

import React from 'react';

const About = () => (
  <div className="card slide-in">
    <h1 className="mb-20" style={{ color: 'var(--chony-red)' }}>About CHONY Student Management</h1>
    <p className="mb-20">
      <b>CHONY Student Management System</b> is a modern, single-page application built with React. It demonstrates navigation, component-based design, and responsive UI using React Router and custom CSS. The app is designed for students and educators to learn the basics of React and SPA development.
    </p>
    <ul className="mb-20">
      <li>🔗 Seamless navigation between Registration, Login, Contact, and About pages</li>
      <li>🎨 Modern UI with red/black theme and Apple Music-inspired fonts</li>
      <li>⚡ Fast, responsive, and mobile-friendly</li>
      <li>🛡️ CHONY branding throughout</li>
    </ul>
    <div className="card" style={{ background: 'var(--chony-black)', marginTop: 30 }}>
      <h3 style={{ color: 'var(--chony-red)' }}>Developer Info</h3>
      <p><b>Name:</b> Haswinchony Saladi</p>
      <p><b>Roll No:</b> 23AG1A0555</p>
      <p><b>Email:</b> 23ag1a0555@gmail.com</p>
      <p><b>Phone:</b> 7995921729</p>
    </div>
  </div>
);

export default About; 