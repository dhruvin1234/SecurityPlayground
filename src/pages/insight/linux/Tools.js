import React, { useRef } from "react";
import "./tools.css";

// Data for privilege escalation tools
const privilegeEscalationTools = [
  {
    name: "LinPEAS",
    description:
      "LinPEAS is a comprehensive script for finding privilege escalation vectors on Linux systems. It searches for potential misconfigurations, weak permissions, and other security weaknesses that may lead to privilege escalation.",
    usage: [
      "wget https://github.com/carlospolop/PEASS-ng/releases/download/20211007/linpeas.sh",
      "chmod +x linpeas.sh",
      "./linpeas.sh",
    ],
  },
  {
    name: "GTFOBins",
    description:
      "GTFOBins is a collection of Unix binaries that can be exploited for privilege escalation. It provides quick access to various techniques for bypassing security restrictions and gaining elevated privileges.",
    usage: [
      "nmap --interactive",
      "!sh", // Example to escalate privileges using Nmap
    ],
  },
  {
    name: "Pspy",
    description:
      "Pspy is a tool that allows you to monitor processes running on a system, helping to identify cron jobs, privileged processes, or other exploitable tasks.",
    usage: [
      "wget https://github.com/drwetter/pspy/releases/download/1.2.2/pspy64",
      "chmod +x pspy64",
      "./pspy64",
    ],
  },
  {
    name: "Sudo-Caching",
    description:
      "Sudo-Caching can reveal sudo permissions that allow a user to run commands with elevated privileges without needing to enter a password. This can help attackers escalate their privileges.",
    usage: ["sudo -l"],
  },
  {
    name: "LinEnum",
    description:
      "LinEnum is a Linux enumeration script that performs a comprehensive check on the system to identify potential privilege escalation opportunities. It searches for weaknesses such as SUID binaries, writable files, and unprotected cron jobs.",
    usage: [
      "wget https://github.com/rebootuser/LinEnum/blob/master/LinEnum.sh",
      "chmod +x LinEnum.sh",
      "./LinEnum.sh",
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
        top: toolRefs.current[toolIndex].offsetTop - 50, // Adjust 50px to your desired scroll offset
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="types-container">
      <h1>Privilege Escalation Tools</h1>
      <p>
        Privilege escalation tools help identify vulnerabilities in Linux systems that
        can be exploited to gain root or administrative access. These tools automate the
        discovery of weak configurations, insecure file permissions, and other potential
        weaknesses that can lead to privilege escalation.
      </p>

      {/* Iterate over the tools and display them */}
      {privilegeEscalationTools.map((tool, index) => (
        <div
          key={index}
          className="tool"
          ref={(el) => (toolRefs.current[index] = el)} // Assign ref to each tool section
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
