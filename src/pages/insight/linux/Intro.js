import React from 'react';
import "./Intro_l.css";
const Intro = () => {
  return (
    <div className="intro-section">
      <h1>Introduction to Linux Privilege Escalation</h1>
      <p>
        Linux privilege escalation is the process by which an attacker exploits vulnerabilities in a system to gain higher privileges than those originally assigned. Typically, the goal is to gain root (administrative) access, allowing the attacker to perform actions that would otherwise be restricted.
      </p>
      <p>
        Privilege escalation can occur due to misconfigurations, software bugs, or vulnerabilities in the Linux kernel or software packages. Once an attacker has limited access, they can use various techniques to escalate their privileges and potentially take full control of the system.
      </p>
      <h2>Why is Privilege Escalation Important?</h2>
      <p>
        Privilege escalation is a critical attack vector because it allows an attacker to bypass security restrictions and access sensitive information or perform malicious actions that could compromise the entire system. By escalating privileges, attackers can gain access to files, configurations, and network resources that are not accessible to regular users.
      </p>
      <p>
        Understanding privilege escalation techniques is essential for both attackers (for penetration testing and CTF challenges) and defenders (to secure systems and prevent unauthorized access).
      </p>
    </div>
  );
};

export default Intro;
