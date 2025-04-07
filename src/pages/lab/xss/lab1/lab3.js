import React, { useEffect, useState } from "react";

const XSSLab3 = () => {
  const [payload, setPayload] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      const decoded = decodeURIComponent(q);
      setPayload(decoded); // Set directly to use dangerouslySetInnerHTML
    }
  }, []);

  return (
    <div style={{ padding: "60px", color: "#0f0", backgroundColor: "#1e1e2f", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff" }}>DOM-Based XSS Lab 3</h1>
      <p>Pass your payload via <code>?q=</code> in the URL</p>
      
      <div
        style={{
          border: "2px solid #444",
          padding: "10px",
          marginTop: "30px",
          backgroundColor: "#111",
          borderRadius: "10px",
        }}
        dangerouslySetInnerHTML={{ __html: payload }}
      />
    </div>
  );
};

export default XSSLab3;
