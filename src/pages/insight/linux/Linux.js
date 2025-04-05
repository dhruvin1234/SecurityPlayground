import { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar
import "./Linux.css";
import Intro from "./Intro";
import TypesOfPrivilegeEscalation from "./TypesOfPrivilegeEscalation";
import Tools from "./Tools";
import MitigationAndDefense from "./MitigationAndDefense";

const Linux = () => {
  const [selectedSection, setSelectedSection] = useState("Intro");
  const [expanded, setExpanded] = useState(false); // Track expansion state

  const renderContent = () => {
    switch (selectedSection) {
      case "Intro":
        return <Intro />;
      case "TypesOfPrivilegeEscalation":
        return <TypesOfPrivilegeEscalation />;
      case "Tools":
        return <Tools />;
      case "MitigationAndDefense":
        return <MitigationAndDefense />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="linux-container">
      <Navbar /> {/* ✅ Navbar added here */}

      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          <h2 className="sidebar-title">Sections</h2>
          <ul className="sidebar-menu">
            <li
              className={`sidebar-item ${selectedSection === "Intro" ? "active" : ""}`}
              onClick={() => setSelectedSection("Intro")}
            >
              Introduction
            </li>

            {/* Expandable Section for Types of Privilege Escalation */}
            <li className="sidebar-item" onClick={() => setExpanded(!expanded)}>
              Types of Privilege Escalation {expanded ? "▼" : "▶"}
            </li>
            {expanded && (
              <ul className="sub-menu">
                <li
                  className={`sidebar-sub-item ${selectedSection === "KernelExploits" ? "active" : ""}`}
                  onClick={() => setSelectedSection("KernelExploits")}
                >
                  Kernel Exploits
                </li>
                <li
                  className={`sidebar-sub-item ${selectedSection === "SUIDBinaries" ? "active" : ""}`}
                  onClick={() => setSelectedSection("SUIDBinaries")}
                >
                  SUID/GUID Binaries
                </li>
                <li
                  className={`sidebar-sub-item ${selectedSection === "FilePermissions" ? "active" : ""}`}
                  onClick={() => setSelectedSection("FilePermissions")}
                >
                  Weak File Permissions
                </li>
                <li
                  className={`sidebar-sub-item ${selectedSection === "RootServices" ? "active" : ""}`}
                  onClick={() => setSelectedSection("RootServices")}
                >
                  Exploiting Root Services
                </li>
                <li
                  className={`sidebar-sub-item ${selectedSection === "ConfigPasswords" ? "active" : ""}`}
                  onClick={() => setSelectedSection("ConfigPasswords")}
                >
                  Passwords in Config Files
                </li>
                <li
                  className={`sidebar-sub-item ${selectedSection === "CronJobs" ? "active" : ""}`}
                  onClick={() => setSelectedSection("CronJobs")}
                >
                  Cron Jobs
                </li>
                <li
                  className={`sidebar-sub-item ${selectedSection === "EnvVariables" ? "active" : ""}`}
                  onClick={() => setSelectedSection("EnvVariables")}
                >
                  Environment Variables
                </li>
              </ul>
            )}

            <li
              className={`sidebar-item ${selectedSection === "Tools" ? "active" : ""}`}
              onClick={() => setSelectedSection("Tools")}
            >
              Privilege Escalation Tools
            </li>
            <li
              className={`sidebar-item ${selectedSection === "MitigationAndDefense" ? "active" : ""}`}
              onClick={() => setSelectedSection("MitigationAndDefense")}
            >
              Mitigation & Defense
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="content-area">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Linux;
