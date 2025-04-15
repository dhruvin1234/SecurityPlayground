import React from 'react';
import './contact.css';
import Navbar from './navbar';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-content">
          <h1 className="main-title">
            Contact <span className="highlight">Security Playground</span>
          </h1>

          <p className="intro">
            We'd love to hear from you! Whether it's feedback, suggestions, or collaboration opportunities,
            feel free to reach out.
          </p>

          <div className="section">
            <h2>📬 Contact Information</h2>
            <ul className="info-list">
              <li>📧 Email: <a href="mailto:dhruvingolakiya2004@gmail.com">dhruvingolakiya2004@gmail.com</a></li>
              <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/dhruvin-golakiya-451574284" target="_blank" rel="noopener noreferrer">Dhruvin Golakiya</a></li>
              <li>🧠 Hack The Box: <a href="https://app.hackthebox.com/profile/1610527" target="_blank" rel="noopener noreferrer">Mukhi</a></li>
              <li>🔍 TryHackMe: <a href="https://tryhackme.com/p/Dhruvin2004" target="_blank" rel="noopener noreferrer">Dhruvin2004</a></li>
            </ul>
          </div>

          <div className="section">
            <h2>📢 Reach Out For</h2>
            <ul className="reasons-list">
              <li>🤝 Collaboration ideas</li>
              <li>🛡️ Security discussions</li>
              <li>🛠️ Lab improvement suggestions</li>
            </ul>
          </div>

          <blockquote className="quote">
            <em>"Your input helps us grow and secure the digital world together."</em>
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default Contact;
