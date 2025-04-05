import React from "react";
import "./Intro_l.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <h1 className="intro-title">Introduction to Linux Privilege Escalation</h1>
      <p className="intro-content">
        Privilege escalation is a crucial concept in Linux security. It occurs when an attacker gains higher privileges than intended, allowing them to execute commands with elevated permissions.
      </p>

      <h2 className="intro-title">Why is Privilege Escalation Important?</h2>
      <ul className="intro-content">
        <li>Allows attackers to gain root access</li>
        <li>Can be used to modify critical system files</li>
        <li>Leads to full system compromise</li>
      </ul>

      <h2 className="intro-title">Types of Privilege Escalation</h2>
      <p className="intro-content">
        There are two main types of privilege escalation:
      </p>
      <ul className="intro-content">
        <li><strong>Vertical Privilege Escalation:</strong> Gaining higher privileges (e.g., from a normal user to root).</li>
        <li><strong>Horizontal Privilege Escalation:</strong> Gaining access to another user's account with similar privileges.</li>
      </ul>

      <h2 className="intro-title">Next Steps</h2>
      <p className="intro-content">
        Explore various techniques, tools, and mitigation strategies to understand Linux privilege escalation in depth.
      </p>
    </div>
  );
};

export default Intro;
