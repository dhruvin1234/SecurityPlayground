import React from "react";
import "./Methodologies.css";

const Methodologies = () => {
  return (
    <div className="methodologies-container">
      <h2 className="methodologies-title">Penetration Testing Methodologies</h2>
      
      <p className="methodologies-content">
        In penetration testing, a methodology is a structured approach that security professionals follow 
        to systematically test and analyze vulnerabilities in a system or network.
      </p>

      <h3 className="methodologies-subtitle">General Pentesting Methodologies</h3>
      <ul className="methodologies-list">
        <li>
          <strong>OSSTMM (Open Source Security Testing Methodology Manual)</strong>: 
          A comprehensive guide covering security testing techniques.
        </li>
        <li>
          <strong>PTES (Penetration Testing Execution Standard)</strong>: 
          Defines best practices for planning, executing, and reporting on penetration tests.
        </li>
        <li>
          <strong>OWASP Testing Guide</strong>: 
          Focuses on security testing for web applications, covering vulnerabilities like XSS, SQLi, and CSRF.
        </li>
        <li>
          <strong>NIST SP 800-115</strong>: 
          A U.S. government standard outlining security assessment procedures.
        </li>
      </ul>
    </div>
  );
};

export default Methodologies;
