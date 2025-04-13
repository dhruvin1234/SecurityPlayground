import React, { useState } from "react";
import "./lab4.css";

const SSRFLab4 = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/ssrf/lab4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      setResult({
        statusCode: data.status,
        contentType: data.contentType,
        isImage: data.isImage,
        body: data.body,
        blocked: data.blocked,
        bypassed: data.bypassed,
        message: data.message,
        dataUrl: data.dataUrl,
      });
    } catch (err) {
      setResult({ error: true, body: "❌ Request failed" });
    }

    setLoading(false);
  };

  return (
    <div className="lab4-container">
      <div className="lab4-box">
        <h1 className="lab4-title">🔐 SSRF Lab 4 – Redirect Handling</h1>
        <p className="lab4-description">
          This lab simulates an SSRF vulnerability where the server blindly follows redirects. Try bypassing the whitelist and making the server request an internal resource via a redirect.
        </p>

        <div className="form-group">
          <input
            className="lab4-input"
            type="text"
            placeholder="Enter a URL (e.g., http://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="lab4-button" onClick={handleFetch} disabled={loading}>
            {loading ? "Loading..." : "Fetch"}
          </button>
        </div>

        <div className="response-box">
          <h3>📦 Server Response</h3>
          <div className="lab4-result-box">
            {result ? (
              result.error ? (
                <p>{result.body}</p>
              ) : result.bypassed ? (
                <p>{result.message}</p>
              ) : result.blocked ? (
                <p>❌ Access Denied – Domain not in whitelist</p>
              ) : result.isImage ? (
                <img src={result.dataUrl} alt="Fetched from server" style={{ maxWidth: "100%" }} />
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

export default SSRFLab4;
