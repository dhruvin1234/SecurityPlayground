import React from "react";
import './Methodologies.css';

const Methodologies = () => {
    return (
        <div className="methodology-section">
            <h1>Web Penetration Testing Methodologies</h1>
            
            <p>
                Penetration testing is an essential practice for identifying vulnerabilities in web applications.
                The following methodologies are commonly used during web pentesting to ensure comprehensive coverage of potential attack vectors:
            </p>

            <h2>1. OWASP Testing Guide</h2>
            <p>
                The OWASP (Open Web Application Security Project) Testing Guide is a widely recognized framework
                for conducting web application security testing. It provides detailed guidance on how to approach
                penetration testing, including testing for top security risks like SQL injection, cross-site scripting (XSS),
                and cross-site request forgery (CSRF).
            </p>
            <h3>Steps:</h3>
            <ul>
                <li>Information Gathering</li>
                <li>Configuration & Deployment Management Testing</li>
                <li>Identity Management Testing</li>
                <li>Authentication & Session Management Testing</li>
                <li>Access Control Testing</li>
                <li>Input Validation Testing</li>
                <li>Error Handling Testing</li>
                <li>Cryptography Testing</li>
            </ul>

            <h2>2. PTES (Penetration Testing Execution Standard)</h2>
            <p>
                PTES is a penetration testing methodology that provides a detailed framework for conducting penetration
                tests. It includes guidelines for every stage of the testing process, from initial engagement to post-exploitation,
                providing a clear and structured approach.
            </p>
            <h3>Steps:</h3>
            <ul>
                <li>Pre-engagement Interactions</li>
                <li>Information Gathering</li>
                <li>Threat Modeling</li>
                <li>Vulnerability Analysis</li>
                <li>Exploitation</li>
                <li>Post-exploitation</li>
                <li>Reporting</li>
            </ul>

            <h2>3. NIST SP 800-115</h2>
            <p>
                NIST SP 800-115 provides a guide to conducting penetration testing, detailing the different
                testing phases, from planning to analysis and reporting. This methodology emphasizes a risk-based
                approach to testing and helps organizations better assess the security posture of their web applications.
            </p>
            <h3>Steps:</h3>
            <ul>
                <li>Planning and Preparation</li>
                <li>Discovery and Enumeration</li>
                <li>Exploitation</li>
                <li>Post-exploitation</li>
                <li>Reporting</li>
            </ul>

            <h2>4. CREST (Council of Registered Ethical Security Testers)</h2>
            <p>
                CREST is a professional organization that certifies penetration testers and provides a
                structured methodology for performing web application testing. It provides guidance on how
                to approach a test, covering everything from initial scoping to final reporting.
            </p>
            <h3>Steps:</h3>
            <ul>
                <li>Information Gathering</li>
                <li>Vulnerability Assessment</li>
                <li>Exploitation</li>
                <li>Post-exploitation</li>
                <li>Reporting</li>
            </ul>

            <h2>5. Black Box, White Box, and Gray Box Testing</h2>
            <p>
                These are testing models that determine the level of information available to the tester during the
                penetration testing process. 
                <strong>Black Box Testing</strong> is when the tester has no prior knowledge of the application,
                <strong>White Box Testing</strong> is when the tester has full access to the source code, and
                <strong>Gray Box Testing</strong> is a combination of both.
            </p>

            <h3>Steps for Black Box Testing:</h3>
            <ul>
                <li>Initial Reconnaissance</li>
                <li>Scanning</li>
                <li>Exploitation</li>
            </ul>

            <h3>Steps for White Box Testing:</h3>
            <ul>
                <li>Source Code Review</li>
                <li>Static and Dynamic Analysis</li>
                <li>Testing for Logic Flaws</li>
            </ul>

            <h3>Steps for Gray Box Testing:</h3>
            <ul>
                <li>Reconnaissance</li>
                <li>Access to Partial Application Knowledge</li>
                <li>Exploitation</li>
            </ul>
        </div>
    );
};

export default Methodologies;
