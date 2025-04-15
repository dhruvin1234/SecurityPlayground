import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const XSSLab = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🔒 SecurityPlayGround</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lab">Lab</Link></li>
          <li><Link to="/insight">Insights</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="xss-container">
        <h1 className="xss-title">Cross-Site Scripting (XSS) Labs</h1>
        <p className="xss-description">
          Select a lab to practice different XSS vulnerabilities.
        </p>

        <div className="xss-grid">
          <Link to="/lab/xss/lab1" className="xss-card">
            <h2>Reflected XSS</h2>
            <p>Basic reflected XSS via URL or form input.</p>
          </Link>
          <Link to="/lab/xss/lab2" className="xss-card">
            <h2>Stored XSS</h2>
            <p>Inject scripts that persist in the database.</p>
          </Link>
          <Link to="/lab/xss/lab3" className="xss-card">
            <h2>DOM-Based XSS</h2>
            <p>XSS triggered from JavaScript DOM manipulation.</p>
          </Link>
          <Link to="/lab/xss/lab4" className="xss-card">
            <h2>XSS in Attributes</h2>
            <p>Inject payloads into HTML tag attributes.</p>
          </Link>
          <Link to="/lab/xss/lab5" className="xss-card">
            <h2>XSS via Events</h2>
            <p>Trigger JavaScript through HTML events like onmouseover.</p>
          </Link>
          <Link to="/lab/xss/lab6" className="sql-card">
            <h2>Filter Bypass XSS</h2>
            <p>Learn to bypass weak input filters.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default XSSLab;
