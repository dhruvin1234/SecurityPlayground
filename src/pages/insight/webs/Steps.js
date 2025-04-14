import React from "react";
import './Steps.css';

const Steps = () => {
    return (
        <div className="steps-section">
            <h1>Steps for Web Penetration Testing</h1>

            <p>
                Web penetration testing involves a systematic approach to uncover vulnerabilities in a web application.
                The following are the typical steps followed during a web penetration test:
            </p>

            <h2>1. Planning and Information Gathering</h2>
            <p>
                The first step in any penetration test is planning and gathering information. This phase involves understanding
                the scope of the test, obtaining necessary permissions, and collecting information about the target application.
                Information gathering helps identify potential entry points for testing.
            </p>

            <h3>Activities in this phase:</h3>
            <ul>
                <li>Defining scope and rules of engagement</li>
                <li>Gathering domain, IP addresses, and application info</li>
                <li>Reconnaissance using tools like WHOIS, NSLOOKUP</li>
            </ul>

            <h2>2. Scanning and Enumeration</h2>
            <p>
                Scanning and enumeration are crucial steps for identifying vulnerabilities. This phase involves actively probing
                the web application to uncover potential weaknesses. Techniques like port scanning, vulnerability scanning,
                and enumeration of services are performed to identify exploitable entry points.
            </p>

            <h3>Tools used in this phase:</h3>
            <ul>
                <li>Nmap</li>
                <li>Burp Suite</li>
                <li>Dirbuster</li>
                <li>Gobuster</li>
            </ul>

            <h2>3. Gaining Access (Exploitation)</h2>
            <p>
                Once vulnerabilities are identified, the next step is to exploit them to gain access to the target system or
                application. This phase tests if the vulnerabilities can be leveraged to break into the system, escalate
                privileges, or perform unauthorized actions.
            </p>

            <h3>Common exploitation techniques:</h3>
            <ul>
                <li>SQL Injection</li>
                <li>Cross-Site Scripting (XSS)</li>
                <li>Command Injection</li>
                <li>File Upload vulnerabilities</li>
            </ul>

            <h2>4. Post-exploitation</h2>
            <p>
                After successfully exploiting a vulnerability, testers perform post-exploitation activities to maintain access,
                escalate privileges, and pivot to other parts of the system. This phase also involves exploring the extent of
                the damage an attacker could do after gaining access.
            </p>

            <h3>Activities in this phase:</h3>
            <ul>
                <li>Privilege escalation</li>
                <li>Persistence and data exfiltration</li>
                <li>Exploring other attack vectors</li>
            </ul>

            <h2>5. Reporting</h2>
            <p>
                The final step in the penetration testing process is to document findings and vulnerabilities. A detailed
                report is created that outlines the test approach, identified vulnerabilities, exploitation results, and suggested
                mitigation techniques to help the organization fix the flaws.
            </p>

            <h3>Key components of the report:</h3>
            <ul>
                <li>Executive Summary</li>
                <li>Detailed Findings and Risk Analysis</li>
                <li>Exploitation Results</li>
                <li>Recommendations for Remediation</li>
            </ul>
        </div>
    );
};

export default Steps;
