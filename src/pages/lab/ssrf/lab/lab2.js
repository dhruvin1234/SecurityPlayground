import React, { useState } from "react";
import "./lab2.css";

const SSRFLab2 = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/ssrf/lab2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "❌ Request failed", message: err.message });
    }

    setLoading(false);
  };

  return (
    <div className="lab2-container">
      <div className="lab2-box">
        <h1 className="lab2-title">🧪 SSRF Lab 2 – URL Header & Image Checker</h1>
        <p className="lab2-description">
          Enter a URL. The server will return headers, status, and content. Try:
        </p>
        <code>http://127.0.0.1</code> or <code>https://example.com/image.png</code>

        <div className="lab2-form">
          <input
            type="text"
            placeholder="Enter URL"
            className="lab2-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="lab2-button" onClick={handleFetch} disabled={loading}>
            {loading ? "Fetching..." : "Send Request"}
          </button>
        </div>

        {result && (
          <div className="lab2-output">
            <h3>📦 Server Response</h3>
            <div className="lab2-result-box">
              {result.error ? (
                <>
                  <strong>{result.error}</strong>
                  <pre>{result.message}</pre>
                </>
              ) : (
                <>
                  <p><strong>Status:</strong> {result.status}</p>
                  <p><strong>Headers:</strong></p>
                  <pre>{JSON.stringify(result.headers, null, 2)}</pre>

                  {result.type === "image" ? (
                    <div style={{ marginTop: "20px" }}>
                      <strong>Preview:</strong><br />
                      <img
                        src={result.dataUrl}
                        alt="Fetched content"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "300px",
                          borderRadius: "10px",
                          marginTop: "10px"
                        }}
                      />
                    </div>
                  ) : (
                    <>
                      <p><strong>Body:</strong></p>
                      <pre>{result.body}</pre>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SSRFLab2;

// http://127.0.0.1