import React, { useRef } from "react";
// import "./tools.css";

// Data for Windows privilege escalation tools
const privilegeEscalationTools = [
  {
    name: "PowerUp",
    description:
      "PowerUp is a PowerShell tool used to identify common privilege escalation vulnerabilities in Windows systems. It checks for weak services, misconfigurations, and insecure file or registry permissions.",
    usage: [
      "IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Privesc/PowerUp.ps1')",
      "Invoke-AllChecks",
    ],
  },
  {
    name: "WinPEAS",
    description:
      "WinPEAS is a Windows-based enumeration tool that scans for possible privilege escalation paths like vulnerable services, permissions, unquoted paths, and registry settings.",
    usage: [
      "Download winPEASx64.exe from GitHub",
      "Run: winPEASx64.exe",
    ],
  },
  {
    name: "Windows Exploit Suggester",
    description:
      "This tool analyzes Windows patch levels and suggests exploits based on missing updates. It uses output from the 'systeminfo' command.",
    usage: [
      "systeminfo > sysinfo.txt",
      "python windows-exploit-suggester.py -d database.csv -i sysinfo.txt",
    ],
  },
  {
    name: "Seatbelt",
    description:
      "Seatbelt is a C# information gathering tool that checks for system-level misconfigurations that may help with privilege escalation.",
    usage: [
      "Seatbelt.exe -group=all",
    ],
  },
  {
    name: "AccessChk",
    description:
      "AccessChk from Sysinternals shows detailed permissions for files, folders, registry keys, and services, which helps in spotting weak permission configurations.",
    usage: [
      "accesschk.exe -uwcqv \"Users\" C:\\Windows\\Tasks",
      "accesschk.exe -uwcqv \"Users\" HKLM",
    ],
  },
];

// Main Tools Component
const Tools = ({ scrollToSection }) => {
  // Create a ref for each tool section to scroll to when clicked
  const toolRefs = useRef([]);

  const handleScroll = (toolName) => {
    const toolIndex = privilegeEscalationTools.findIndex(tool => tool.name === toolName);
    if (toolRefs.current[toolIndex]) {
      window.scrollTo({
        top: toolRefs.current[toolIndex].offsetTop - 50, // Adjust scroll offset
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="types-container">
      <h1>Windows Privilege Escalation Tools</h1>
      <p>
        These tools help identify privilege escalation opportunities in Windows systems by 
        scanning for misconfigurations, unpatched vulnerabilities, and weak permissions.
      </p>

      {/* Iterate over the tools and display them */}
      {privilegeEscalationTools.map((tool, index) => (
        <div
          key={index}
          className="tool"
          ref={(el) => (toolRefs.current[index] = el)}
        >
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>

          <h3>Usage:</h3>
          <pre>{tool.usage.join("\n")}</pre>
        </div>
      ))}
    </div>
  );
};

export default Tools;
