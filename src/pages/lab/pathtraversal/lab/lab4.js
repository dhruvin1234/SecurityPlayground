import React, { useState } from "react";
import "./lab4.css";

const fileSystem = {
  "public/readme.txt": "Welcome to Security Playground! This is the readme.",
  "../../etc/passwd": `
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
user:x:1000:1000:User:/home/user:/bin/bash
`,
  "../../home/user/.ssh/id_rsa": `
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEArandomkeymaterial...
-----END RSA PRIVATE KEY-----
`,
};

const Lab4 = () => {
  const [filePath, setFilePath] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Decode and normalize input
    let rawPath = decodeURIComponent(filePath.trim());

    // Simulated extension filter check
    if (!rawPath.endsWith(".txt")) {
      setFileContent("❌ Access Denied: Only .txt files are allowed.");
      return;
    }

    // Bypass tricks (simulate attackers removing .txt)
    const cleanedPath = rawPath
      .replace(/%2e|%2E|\s|\.$|\.txt$|::\$data/g, "") // common tricks
      .trim();

    // Check if bypassed version exists
    if (fileSystem[cleanedPath]) {
      setFileContent(fileSystem[cleanedPath]);
    } else if (fileSystem[rawPath]) {
      setFileContent(fileSystem[rawPath]);
    } else {
      setFileContent("❌ File not found or access denied.");
    }
  };

  return (
    <div className="lab4-container">
      <div className="lab4-box">
        <h1 className="lab4-title">🚪 Traversal with Extension Bypass</h1>
        <p className="lab4-description">
          Only <code>.txt</code> files are allowed. Can you trick the filter?<br />
          Try inputs like <code>../../etc/passwd%2etxt</code> or <code>../../etc/passwd::$data</code>
        </p>
        <form onSubmit={handleSubmit} className="lab4-form">
          <input
            type="text"
            className="lab4-input"
            placeholder="Enter file path (e.g., ../../etc/passwd%2etxt)"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
          />
          <button type="submit" className="lab4-button">
            Read File
          </button>
        </form>
        <div className="lab4-output">
          <div className="lab4-result-box">
            <pre>{fileContent}</pre>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab4;

// ../../etc/passwd%2etxt	
// ..%2f..%2fetc/passwd%2etxt