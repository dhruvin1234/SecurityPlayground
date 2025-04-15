import React from "react";
import { Link } from "react-router-dom";
// import "./index.css";

const SSTI = () => {
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

      <div className="sql-container">
        <h1 className="sql-title">Server-Side Template Injection (SSTI) Labs</h1>
        <p className="sql-description">
          Explore different SSTI vulnerabilities and how attackers can exploit template engines.
        </p>

        <div className="sql-grid">
          <Link to="/lab/ssti/lab1" className="sql-card">
            <h2>Basic SSTI Injection</h2>
            <p>Render user input directly using a template engine like EJS.</p>
          </Link>
          <Link to="/lab/ssti/lab2" className="sql-card">
            <h2>Environment Variable Leak</h2>
            <p>Leak system variables via SSTI vulnerability in EJS/Pug.</p>
          </Link>
        
          <Link to="/lab/ssti/lab3" className="sql-card">
            <h2>SSTI to RCE</h2>
            <p>Execute commands on the server by exploiting SSTI in unsafe templates.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SSTI;
