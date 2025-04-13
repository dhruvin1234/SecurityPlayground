// ✅ File: lab5.js
import React, { useState } from "react";
import "./lab5.css";

const SSRFLab5 = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5000/api/ssrf/lab5", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("❌ Error sending request");
    }

    setLoading(false);
  };

  return (
    <div className="lab5-container">
      <div className="lab5-box">
        <h1 className="lab5-title">🕵️‍♂️ Blind SSRF Lab</h1>
        <p className="lab5-description">
          This lab demonstrates Blind SSRF. Enter a URL that causes the server to make a request — the response is hidden from you.
        </p>

        <div className="lab5-form">
          <input
            className="lab5-input"
            type="text"
            placeholder="Enter a URL (e.g., http://your-domain.com/ping)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="lab5-button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Send Request"}
          </button>
        </div>

        <div className="lab5-output">
          {message && <p className="lab5-result-box">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SSRFLab5;
