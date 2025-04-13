import React from "react";
import { Link } from "react-router-dom";
// import "./index.css";

const SSRF = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🔒 SecurityPlayGround</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/lab">Lab</Link></li>
          <li><Link to="/insight">Insights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="sql-container">
        <h1 className="sql-title">SSRF Labs</h1>
        <p className="sql-description">
          Select a lab to practice different Server-Side Request Forgery vulnerabilities.
        </p>

        <div className="sql-grid">
          <Link to="/lab/ssrf/lab1" className="sql-card">
            <h2>Basic SSRF with URL Input</h2>
            <p>Demonstrates basic SSRF using URL input field.</p>
          </Link>
          <Link to="/lab/ssrf/lab2" className="sql-card">
            <h2>SSRF via Image URL Fetching</h2>
            <p>Image preview feature vulnerable to SSRF.</p>
          </Link>
          <Link to="/lab/ssrf/lab3" className="sql-card">
            <h2>SSRF with Whitelist Bypass</h2>
            <p>Bypassing domain filters to access internal URLs.</p>
          </Link>
          <Link to="/lab/ssrf/lab4" className="sql-card">
            <h2>SSRF via Redirect Handling</h2>
            <p>Exploiting open redirects to reach internal services.</p>
          </Link>
      
          <Link to="/lab/ssrf/lab5" className="sql-card">
            <h2>Blind SSRF</h2>
            <p>Triggering SSRF with no direct output (use webhook.site).</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SSRF;
