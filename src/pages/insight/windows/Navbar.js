import React from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="web-navbar">
      <div className="web-logo">🔒 SecurityPlayGround</div>
      <ul className="web-nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/insight">Insights</Link></li>
        <li><Link to="/lab">Lab</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
