// About.js

import React from 'react';
import './about.css';
import Navbar from './navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-content">
          <h1 className="main-title">
            About <span className="highlight">Security Playground</span>
          </h1>

          <p className="intro">
            <strong>Security Playground</strong> is an educational platform built to demonstrate real-world web application vulnerabilities in a safe and controlled environment. It’s designed specifically for students, ethical hackers, and cybersecurity enthusiasts to learn and practice offensive security concepts hands-on.
          </p>

          <div className="section">
            <h2>🎯 Vision</h2>
            <p>
              To create an accessible, interactive, and impactful learning environment that empowers individuals to understand, identify, and mitigate web security vulnerabilities.
            </p>
          </div>

          <div className="section">
            <h2>🚀 Mission</h2>
            <ul className="styled-list">
              <li>Provide beginner-friendly labs simulating real-world vulnerabilities.</li>
              <li>Raise awareness about common cybersecurity flaws.</li>
              <li>Bridge the gap between theory and practical cybersecurity.</li>
              <li>Support academic learning through hands-on experience.</li>
            </ul>
          </div>

          <div className="section">
            <h2>🔍 What is Security Playground?</h2>
            <p>Security Playground includes modules that explain and simulate various vulnerabilities like:</p>
            <ul className="vuln-list">
              <li>SQL Injection</li>
              <li>Cross-Site Scripting (XSS)</li>
              <li>Path Traversal</li>
              <li>Command Injection</li>
              <li>Information Disclosure</li>
              <li>File Upload Vulnerabilities</li>
              <li>Server-Side Request Forgery (SSRF)</li>

              
            </ul>
            <p>Each module contains a vulnerable form or interaction, followed by a detailed explanation of how it works and how to prevent it.</p>
          </div>

          <div className="section">
            <h2>👨‍💻 Project Details</h2>
            <ul className="project-info">
              <li><strong>Created By:</strong> Dhruvin Golakiya</li>
              <li><strong>Course:</strong> Web Development Project</li>
              <li><strong>Department:</strong> Information and Communication Technology</li>
              <li><strong>University:</strong> Pandit Deendayal Energy University</li>
              <li><strong>Tech Stack:</strong> React.js,Node js, HTML, CSS</li>
            </ul>
          </div>

          <blockquote className="quote">
            <em>"Learn to hack ethically – and secure the future."</em>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default About;
