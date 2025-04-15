import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const InformationDisclosure = () => {
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
        <h1 className="sql-title">Information Disclosure Labs</h1>
        <p className="sql-description">
          Select a lab to explore different Information Disclosure scenarios.
        </p>

        <div className="sql-grid">
        <Link to="/lab/informationdisclosure/lab1" className="sql-card">
            <h2>robots.txt File Exposure</h2>
            <p>Hidden paths revealed through robots.txt rules.</p>
          </Link>

          <Link to="/lab/informationdisclosure/lab2" className="sql-card">
            <h2>Backup File Disclosure</h2>
            <p>Accessing .bak or .old files exposing sensitive data.</p>
          </Link>
          <Link to="/lab/informationdisclosure/lab3" className="sql-card">
            <h2>.env File Exposure</h2>
            <p>Leaking environment variables via exposed backend files.</p>
          </Link>
          <Link to="/lab/informationdisclosure/lab4" className="sql-card">
            <h2>Public ReadMe or Config File</h2>
            <p>Unprotected files like readme.txt and config.json available.</p>
          </Link>
          <Link to="/lab/informationdisclosure/lab5" className="sql-card">
            <h2>Sensitive Comments in Source Code</h2>
            <p>Secrets or tokens left in frontend code comments.</p>
          </Link>
          
         
         
          
        </div>
      </div>
    </>
  );
};

export default InformationDisclosure;
