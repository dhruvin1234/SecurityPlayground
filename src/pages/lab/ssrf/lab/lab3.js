import React, { useState } from "react";
import "./lab3.css";

const SSRFLab3 = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setResult(null);

    try {
      // Update the URL for the correct route on your server
      const res = await fetch("http://localhost:5000/api/ssrf/lab3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      // Update result state with the server's response
      setResult({
        statusCode: data.statusCode,
        contentType: data.contentType,
        isImage: data.isImage,
        body: data.body,
        blocked: data.blocked,
        bypassed: data.bypassed, // Add the bypassed field from the server response
        message: data.message,   // Add message (e.g., "Hello from internal service at 127.0.0.1!")
      });
    } catch (err) {
      setResult({ error: true, body: "❌ Request failed" });
    }

    setLoading(false);
  };

  return (
    <div className="lab3-container">
      <div className="lab3-box">
        <h1 className="lab3-title">🔐 SSRF Lab 3 – Whitelist Bypass</h1>
        <p className="lab3-description">
          This lab simulates SSRF protection using a domain whitelist. Try bypassing it using DNS tricks, redirects, or subdomains.
        </p>

        <div className="lab3-form">
          <input
            className="lab3-input"
            type="text"
            placeholder="Enter a URL (e.g., http://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="lab3-button" onClick={handleFetch} disabled={loading}>
            {loading ? "Loading..." : "Fetch"}
          </button>
        </div>

        <div className="lab3-output">
          <h3>📦 Server Response</h3>
          <div className="lab3-result-box">
            {result ? (
              result.error ? (
                <p>{result.body}</p>
              ) : result.blocked ? (
                <p>❌ Access Denied – Domain not in whitelist</p>
              ) : result.bypassed ? ( // Check if bypassed is true
                <p>{result.message}</p>  // Display the bypass message (e.g., "Hello from internal service at 127.0.0.1!")
              ) : result.isImage ? (
                <img src={url} alt="Fetched from server" style={{ maxWidth: "100%" }} />
              ) : (
                <pre>{result.body}</pre>
              )
            ) : (
              <p>No response yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSRFLab3;

// http://127.0.0.1%2Fexample.com
// http://127.0.0.1%2Fexample.com

