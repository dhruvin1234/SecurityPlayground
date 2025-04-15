import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const SQLInjection = () => {
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
        <h1 className="sql-title">SQL Injection Labs</h1>
        <p className="sql-description">
          Select a lab to practice different SQL Injection vulnerabilities.
        </p>

        <div className="sql-grid">
          <Link to="/lab/sql-injection/lab1" className="sql-card">
            <h2>Basic SQL Injection (Login Bypass)</h2>
            <p>Understanding the basics of SQL Injection With Login Bypass.</p>
          </Link>
          <Link to="/lab/sql-injection/lab2" className="sql-card">
            <h2>Determine Column with Union-Based Injection</h2>
            <p>Extracting data using UNION queries.</p>
          </Link>
          <Link to="/lab/sql-injection/lab3" className="sql-card">
            <h2>Determine Column with Union-Based Injection</h2>
            <p>Extracting data using UNION queries.</p>
          </Link>
          <Link to="/lab/sql-injection/lab4" className="sql-card">
            <h2>Error-Based Injection</h2>
            <p>Leveraging error messages to extract information.</p>
          </Link>
          <Link to="/lab/sql-injection/lab5" className="sql-card">
            <h2>Boolean-Based Injection</h2>
            <p>Exploiting SQL Injection using boolean logic.</p>
          </Link>
          <Link to="/lab/sql-injection/lab6" className="sql-card">
            <h2>Time-Based Injection</h2>
            <p>Extracting data using time delays.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SQLInjection;
