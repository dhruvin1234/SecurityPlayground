import React from "react";
import { Link } from "react-router-dom";
import "./insight.css";

const Insights = () => {
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

      <div className="insights-container">
        <h1 className="insights-title">Cybersecurity Insights</h1>
        <p className="insights-description">
          Explore different aspects of pentesting in various environments.
        </p>

        <div className="insights-grid">
          <Link to="/insight/webs/WebPentesting" className="insight-box web">
            <h2>Web Pentesting</h2>
          </Link>
          <Link to="/insight/windows" className="insight-box windows">
            <h2>Windows Pentesting</h2>
          </Link>
          {/* ✅ Fixed the wrong link */}
          <Link to="/insight/linux" className="insight-box linux">
            <h2>Linux Pentesting</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Insights;
