import React from "react";
import "./TypesOfPrivilegeEscalation.css"; // Import the CSS file

const TypesOfPrivilegeEscalation = () => {
  return (
    <div className="types-container">
      <h1>Types of Linux Privilege Escalation</h1>
      
      <h2>1. Kernel Exploits</h2>
      <p>Kernel vulnerabilities allow attackers to escalate privileges by exploiting flaws in the Linux kernel.</p>

      <h2>2. Misconfigured SUID/GUID Binaries</h2>
      <p>Some binaries run with elevated privileges, and misconfigurations can allow attackers to execute commands as root.</p>

      <h2>3. Weak File Permissions</h2>
      <p>Poorly configured file or directory permissions can lead to privilege escalation.</p>

      <h2>4. Exploiting Services Running as Root</h2>
      <p>If a service running as root has vulnerabilities, attackers can exploit it to gain higher privileges.</p>

      <h2>5. Passwords in Configuration Files</h2>
      <p>Stored credentials in configuration files can be used to escalate privileges.</p>

      <h2>6. Scheduled Jobs (Cron Jobs)</h2>
      <p>Misconfigured or writable cron jobs can allow privilege escalation by replacing scripts executed with elevated privileges.</p>

      <h2>7. Environment Variables Manipulation</h2>
      <p>Some programs use environment variables insecurely, allowing privilege escalation.</p>
    </div>
  );
};

export default TypesOfPrivilegeEscalation;
