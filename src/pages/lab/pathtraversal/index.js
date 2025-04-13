import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const PathTraversal = () => {
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

      <div className="pt-container">
        <h1 className="pt-title">Path Traversal Labs</h1>
        <p className="pt-description">
          Select a lab to practice different Path Traversal vulnerabilities.
        </p>

        <div className="pt-grid">
          <Link to="/lab/pathtraversal/lab1" className="pt-card">
            <h2>Basic Path Traversal</h2>
            <p>Learn how file paths can be manipulated to access sensitive files.</p>
          </Link>
          <Link to="/lab/pathtraversal/lab2" className="pt-card">
            <h2>Encoded Path Traversal</h2>
            <p>Bypass filters using encoded payloads like %2e%2e%2f.</p>
          </Link>
          <Link to="/lab/pathtraversal/lab3" className="pt-card">
            <h2>Traversal with Null Byte</h2>
            <p>Explore older techniques using null byte injection.</p>
          </Link>
          <Link to="/lab/pathtraversal/lab4" className="pt-card">
            <h2>Traversal with Bypassed Extensions</h2>
            <p>Bypass file-type restrictions and still access sensitive content.</p>
          </Link>
          <Link to="/lab/path-traversal/lab5" className="pt-card">
            <h2>Traversal in File Download</h2>
            <p>Abuse download endpoints to retrieve unauthorized files.</p>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default PathTraversal;
