import React, { useState } from "react";
import "./lab1.css";

const SSRFLab1 = () => {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/ssrf/lab1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.body) {
        setResponse(data.body);
      } else if (data.error) {
        setResponse(`❌ ${data.error}\n${data.message || ""}`);
      } else {
        setResponse("No response received.");
      }
    } catch (err) {
      setResponse("❌ Error fetching URL. Check server or input.");
    }

    setLoading(false);
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h1 className="lab1-title">🔎 SSRF Lab 1 – Basic URL Input</h1>
        <p className="lab1-description">
          Enter a URL and the server will fetch it. Try internal SSRF like:
        </p>
        <code style={{ display: "block", textAlign: "center", marginBottom: "20px" }}>
          http://127.0.0.1
        </code>

        <div className="lab1-form">
          <input
            type="text"
            className="lab1-input"
            placeholder="Enter URL (e.g., http://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="lab1-button"
            onClick={handleFetch}
            disabled={loading}
          >
            {loading ? "Fetching..." : "Send Request"}
          </button>
        </div>

        <div className="lab1-output">
          <h3>📨 Server Response:</h3>
          <div className="lab1-result-box">
            <pre>{response}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSRFLab1;

// http://127.0.0.1
// http://example.com
// http://localhost