import { useEffect, useRef } from "react";
import "./TypesOfPrivilegeEscalation.css";

const TypesOfPrivilegeEscalation = ({ setRef }) => {
  const sectionRefs = {
    KernelExploits: useRef(null),
    SUIDBinaries: useRef(null),
    FilePermissions: useRef(null),
    RootServices: useRef(null),
    ConfigPasswords: useRef(null),
    CronJobs: useRef(null),
    EnvVariables: useRef(null),
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setRef((sectionId) => {
      const section = sectionRefs[sectionId];
      if (section && section.current) {
        section.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, [setRef]);

  return (
    <div className="types-container">
      <h2 ref={sectionRefs.KernelExploits}>Kernel Exploits</h2>
            <p>
              Kernel exploits target vulnerabilities in the core of the operating system, allowing attackers to escalate privileges to root.
              These are powerful because the kernel has full control over the system.
            </p>

            <h3>🧠 What is a Kernel?</h3>
            <p>
              The kernel is the central part of the OS that manages hardware, memory, processes, and more. If compromised, the attacker gains full control of the system.
            </p>

            <h3>🔍 How to Check Kernel Version</h3>
            <pre>
              <code>uname -r</code>
            </pre>
            <p>
              This command displays the running kernel version. You can use it to search for known vulnerabilities.
            </p>

            <h3>📚 Finding Exploits</h3>
            <p>
              Use websites like <a href="https://www.exploit-db.com" target="_blank" rel="noreferrer">Exploit-DB</a> or tools like <code>searchsploit</code>:
            </p>
            <pre>
              <code>searchsploit linux kernel 4.15</code>
            </pre>

            <h3>💥 Exploitation Example (Dirty COW)</h3>
            <p>
              Dirty COW (CVE-2016-5195) is a well-known kernel exploit that allowed privilege escalation.
            </p>
            <pre>
              <code>
                gcc dirtycow.c -o dirtycow
                ./dirtycow
              </code>
            </pre>
            <p>
              After running this exploit, you might gain root shell (only if the system is vulnerable).
            </p>

            <h3>🛡️ How to Prevent Kernel Exploits</h3>
            <ul>
              <li>Always keep the system and kernel updated.</li>
              <li>Use minimal privileges.</li>
              <li>Enable security modules like AppArmor or SELinux.</li>
            </ul>


      <h2 ref={sectionRefs.SUIDBinaries}>SUID/GUID Binaries</h2>
      <p>Explanation and content for SUID/GUID Binaries...</p>

      <h2 ref={sectionRefs.FilePermissions}>Weak File Permissions</h2>
      <p>Explanation and content for File Permissions...</p>

      <h2 ref={sectionRefs.RootServices}>Exploiting Root Services</h2>
      <p>Explanation and content for Root Services...</p>

      <h2 ref={sectionRefs.ConfigPasswords}>Passwords in Config Files</h2>
      <p>Explanation and content for Config Passwords...</p>

      <h2 ref={sectionRefs.CronJobs}>Cron Jobs</h2>
      <p>Explanation and content for Cron Jobs...</p>

      <h2 ref={sectionRefs.EnvVariables}>Environment Variables</h2>
      <p>Explanation and content for Environment Variables...</p>
    </div>
  );
};

export default TypesOfPrivilegeEscalation;
