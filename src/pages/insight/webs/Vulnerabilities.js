import React from "react";
import { Link } from "react-router-dom";
import "./Vulnerabilities.css";

const Vulnerabilities = () => {
  const vulnerabilities = [
    { name: "SQL Injection", severity: "High", link: "/sql-injection" },
    { name: "Cross-Site Scripting (XSS)", severity: "Medium", link: "/xss" },
    { name: "Path Traversal", severity: "High", link: "/path-traversal" },
    { name: "Command Injection", severity: "High", link: "/command-injection" },
    { name: "Information Disclosure", severity: "Low", link: "/information-disclosure" },
    { name: "File Upload", severity: "High", link: "/file-upload" },
    { name: "SSRF", severity: "Medium", link: "/ssrf" },
    { name: "XXE Injection", severity: "High", link: "/xxe-injection" },
    { name: "Server-Side Template Injection (SSTI)", severity: "High", link: "/ssti" },
  ];

  return (
    <div className="vulnerabilities-container">
      <h2 className="vulnerabilities-title">Common Web Vulnerabilities</h2>
      <table className="vulnerabilities-table">
        <thead>
          <tr>
            <th>Vulnerability Name</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.map((vuln, index) => (
            <tr key={index}>
              <td>
                <Link to={vuln.link} className="vuln-link">{vuln.name}</Link>
              </td>
              <td className={`severity-${vuln.severity.toLowerCase()}`}>{vuln.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vulnerabilities;
