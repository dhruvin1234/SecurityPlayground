import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="steps-container">
      <h2 className="steps-title">Steps of Web Penetration Testing</h2>
      <div className="steps-content">
        <p>
          Web penetration testing is a systematic approach to identifying security vulnerabilities in a web application. Below are the key steps involved:
        </p>

        <h3>1. Reconnaissance (Information Gathering)</h3>
        <p>
          The first step is collecting as much information as possible about the target application. 
          This includes discovering domain names, subdomains, IP addresses, technologies used (e.g., CMS, frameworks), and public records that could help in an attack.
          Methods include **Google Dorking, WHOIS lookups, subdomain enumeration**, and scanning for leaked credentials.
        </p>

        <h3>2. Scanning & Enumeration</h3>
        <p>
          This step involves actively scanning the target to identify security weaknesses. 
          Common tasks include **port scanning (Nmap), directory enumeration (Gobuster, FFUF), vulnerability scanning (Nikto, OpenVAS)**, and fingerprinting the technology stack.
          The goal is to find misconfigurations, outdated software, and exposed endpoints.
        </p>

        <h3>3. Exploitation (Attacking the Target)</h3>
        <p>
          Once vulnerabilities are identified, ethical hackers attempt to exploit them to assess their impact.
          Common attack techniques include **SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and authentication bypass**.
          Exploiting these weaknesses demonstrates how an attacker could compromise sensitive data or user accounts.
        </p>

        <h3>4. Post-Exploitation (Privilege Escalation & Data Extraction)</h3>
        <p>
          After successfully exploiting a vulnerability, testers explore further risks such as **privilege escalation (gaining admin access), session hijacking, or lateral movement** within the application.
          If sensitive data (like user credentials or database records) can be accessed, it's documented in this phase.
        </p>

        <h3>5. Reporting (Documenting Findings & Recommendations)</h3>
        <p>
          The final step is to compile a **detailed penetration testing report**, outlining:
          - A **summary** of vulnerabilities found.
          - A **risk assessment** with severity levels.
          - **Proof of Concept (PoC)** demonstrating the exploit.
          - **Mitigation recommendations** for each issue.
          A well-structured report helps organizations patch security gaps effectively.
        </p>

        <h3>Conclusion</h3>
        <p>
          Web penetration testing is an essential process to ensure application security. 
          By following a structured approach, ethical hackers can help organizations protect their data and users from real-world cyber threats.
        </p>
      </div>
    </div>
  );
};

export default Steps;
