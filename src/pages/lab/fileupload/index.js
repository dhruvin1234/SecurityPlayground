import React from "react";
import { Link } from "react-router-dom";
// import "./index.css";

const FileUpload = () => {
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
        <h1 className="sql-title">File Upload Vulnerability Labs</h1>
        <p className="sql-description">
          Select a lab to practice different file upload vulnerabilities.
        </p>

        <div className="sql-grid">
          <Link to="/lab/fileupload/lab1" className="sql-card">
            <h2>No File Type Validation</h2>
            <p>Upload any file without restrictions.</p>
          </Link>
          <Link to="/lab/fileupload/lab2" className="sql-card">
            <h2>File Extension Bypass</h2>
            <p>Client-side checks only — bypassable by attacker.</p>
          </Link>
        
          <Link to="/lab/fileupload/lab3" className="sql-card">
            <h2>Public Upload Directory Exposure</h2>
            <p>Files accessible directly after upload.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
