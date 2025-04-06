import { useState, useRef } from "react";
import Navbar from "./Navbar";
import "./Linux.css";
import Intro from "./Intro";
import TypesOfPrivilegeEscalation from "./TypesOfPrivilegeEscalation";
import Tools from "./Tools";
import MitigationAndDefense from "./MitigationAndDefense";

const Linux = () => {
  const [selectedSection, setSelectedSection] = useState("Intro");
  const [expanded, setExpanded] = useState(false);
  const subSectionRef = useRef(null);

  const handleSubSectionClick = (subSectionId) => {
    setSelectedSection("TypesOfPrivilegeEscalation");
    setTimeout(() => {
      if (subSectionRef.current) {
        subSectionRef.current(subSectionId);
      }
    }, 0);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "Intro":
        return <Intro />;
      case "TypesOfPrivilegeEscalation":
        return <TypesOfPrivilegeEscalation setRef={(refFn) => (subSectionRef.current = refFn)} />;
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
      <Navbar />
      <div className="main-content">
        <div className="sidebar">
          <h2 className="sidebar-title">Sections</h2>
          <ul className="sidebar-menu">
            <li className={`sidebar-item ${selectedSection === "Intro" ? "active" : ""}`} onClick={() => setSelectedSection("Intro")}>
              Introduction
            </li>
            <li className="sidebar-item" onClick={() => setExpanded(!expanded)}>
              Types of Privilege Escalation {expanded ? "▼" : "▶"}
            </li>
            {expanded && (
              <ul className="sub-menu">
                {[
                  "KernelExploits",
                  "SUIDBinaries",
                  "FilePermissions",
                  "RootServices",
                  "ConfigPasswords",
                  "CronJobs",
                  "EnvVariables",
                ].map((topic) => (
                  <li key={topic} className="sidebar-sub-item" onClick={() => handleSubSectionClick(topic)}>
                    {topic.replace(/([A-Z])/g, " $1").trim()}
                  </li>
                ))}
              </ul>
            )}
            <li className={`sidebar-item ${selectedSection === "Tools" ? "active" : ""}`} onClick={() => setSelectedSection("Tools")}>
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
        <div className="content-area">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Linux;
