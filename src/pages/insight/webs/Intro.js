import React from 'react';
import './Intro.css'; // Import custom styles

const Intro = () => {
  return (
    <div className="intro-section">
      <h1>Introduction to Web Penetration Testing</h1>

      <p>
        
      </p>

      <p>
      Web penetration testing (web pentesting) is the process of testing and evaluating the security of a web application or website to identify vulnerabilities that could be exploited by attackers.      
      </p>
      <p>
      The goal is to find weaknesses in the system, such as flaws in code, misconfigurations, or weak defenses, before cybercriminals can take advantage of them. Pentesters use various tools and techniques to simulate real-world attacks and report their findings to help improve the security of the web application.
      </p>
      <p>
       Web applications are commonly used in businesses for things like online shopping, banking, and managing customer data. Because they are everywhere and hold important information, they are often targeted by hackers. It's very important to protect these applications to keep both the company and its users safe from cyberattacks.
      </p>

      <h2>Why is Web Penetration Testing Important?</h2>
      <ul>
        <li><strong>Identifying vulnerabilities:</strong> It helps identify vulnerabilities before malicious hackers can exploit them.</li>
        <li><strong>Mitigating risks:</strong> Helps mitigate the risk of unauthorized access to sensitive data.</li>
        <li><strong>Compliance:</strong> Many organizations are required by law or regulation to ensure that their web applications are secure.</li>
        <li><strong>Improving security posture:</strong> Provides an opportunity to improve security measures based on findings.</li>
      </ul>
    </div>
  );
};

export default Intro;
