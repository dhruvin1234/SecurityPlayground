import React from "react";
import "./lab.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Lab = () => {
  return (
    <>
      {/* Same Navbar as Home Page */}
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

      <div className="lab-container">
        <h1 className="lab-title">Cybersecurity Lab</h1>
        <p className="lab-description">
          Select a vulnerability type to explore hands-on labs.
        </p>

        <div className="lab-grid">
          <Link to="/lab/sql-injection" className="lab-box sql">
            <h2>SQL Injection</h2>
          </Link>
          <Link to="/lab/xss" className="lab-box xss">
            <h2>Cross-Site Scripting (XSS)</h2>
          </Link>
          <Link to="/lab/pathtraversal" className="lab-box path">
            <h2>Path Traversal</h2>
          </Link>
          <Link to="/lab/commandinjection" className="lab-box command">
            <h2>Command Injection</h2>
          </Link>
          <Link to="/lab/informationdisclosure" className="lab-box info">
            <h2>Information Disclosure</h2>
          </Link>
          <Link to="/lab/fileupload" className="lab-box upload">
            <h2>File Upload</h2>
          </Link>
          <Link to="/lab/ssrf" className="lab-box ssrf">
            <h2>SSRF</h2>
          </Link>
         
          <Link to="/lab/ssti" className="lab-box ssti">
            <h2>Server-Side Template Injection (SSTI)</h2>
          </Link>
          <Link to="/lab/xxe-injection" className="lab-box xxe">
            <h2></h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lab;
