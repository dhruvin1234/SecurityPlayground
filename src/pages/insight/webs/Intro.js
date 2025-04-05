import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <h2 className="intro-title">Introduction to Web Penetration Testing</h2>
      <div className="intro-content">
        <p>
          Web penetration testing (Web Pentesting) is a way to check how secure a web application is by simulating real cyberattacks. The goal is to find weaknesses before hackers do, so they can be fixed before causing harm.
        </p>
        <h3>Why is Web Penetration Testing Important?</h3>
        <p>
          Websites and apps handle sensitive data like passwords, credit card details, and personal information. If these are not protected properly, hackers can steal or manipulate data, leading to financial loss, legal issues, and damage to reputation.
        </p>
        <h3>Main Goals of Web Pentesting</h3>
        <ul>
          <li>Find and fix security flaws before attackers exploit them.</li>
          <li>Understand how vulnerabilities could impact a business.</li>
          <li>Provide clear recommendations to improve security.</li>
          <li>Ensure compliance with security standards like OWASP, GDPR, and PCI-DSS.</li>
        </ul>
        <h3>Common Security Threats</h3>
        <p>Web applications often face these security risks:</p>
        <ul>
          <li><strong>SQL Injection (SQLi):</strong> Attackers inject malicious database queries to steal or modify data.</li>
          <li><strong>Cross-Site Scripting (XSS):</strong> Hackers inject harmful scripts to steal user information or alter a website's behavior.</li>
          <li><strong>Cross-Site Request Forgery (CSRF):</strong> Tricking users into performing actions they didn’t intend to.</li>
          <li><strong>Broken Authentication:</strong> Weak login security can let attackers access private accounts.</li>
          <li><strong>Insecure Direct Object References (IDOR):</strong> Attackers manipulate URLs to access unauthorized data.</li>
        </ul>
        <h3>How Web Pentesting Works</h3>
        <p>The testing process follows these steps:</p>
        <ul>
          <li><strong>Reconnaissance:</strong> Collecting information about the target website.</li>
          <li><strong>Scanning:</strong> Finding weaknesses and security gaps.</li>
          <li><strong>Exploitation:</strong> Testing how vulnerabilities can be used by attackers.</li>
          <li><strong>Post-Exploitation:</strong> Checking the possible impact and persistence of an attack.</li>
          <li><strong>Reporting:</strong> Documenting the findings and suggesting fixes.</li>
        </ul>
        <h3>Conclusion</h3>
        <p>
          Web penetration testing is a vital part of cybersecurity. It helps companies protect their web applications from hackers by identifying and fixing vulnerabilities. Following proper testing methods and security standards ensures stronger protection against cyber threats.
        </p>
      </div>
    </div>
  );
};

export default Intro;
