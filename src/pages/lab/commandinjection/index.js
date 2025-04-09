import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CommandInjectionIndex = () => {
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

      <div className="cmd-container">
        <h1 className="cmd-title">Command Injection Labs</h1>
        <p className="cmd-description">
          Select a lab below to explore different types of command injection vulnerabilities.
        </p>

        <div className="cmd-grid">
          <Link to="/lab/commandinjection/lab1" className="cmd-card">
            <h2>1. Basic Ping Lab (Linux)</h2>
            <p>Try injecting commands through a basic ping form.</p>
          </Link>

          <Link to="/lab/commandinjection/lab2" className="cmd-card">
            <h2>2. Blind Command Injection</h2>
            <p>Detect command execution without seeing direct output.</p>
          </Link>

          <Link to="/lab/commandinjection/lab3" className="cmd-card">
            <h2>3. Whitelist Bypass</h2>
            <p>Try bypassing simple input restrictions to run your own commands.</p>
          </Link>

          <Link to="/lab/commandinjection/lab4" className="cmd-card">
            <h2>4. Filter Evasion</h2>
            <p>Bypass input filters and execute hidden system commands.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CommandInjectionIndex;
