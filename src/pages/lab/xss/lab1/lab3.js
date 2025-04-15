import React, { useState } from "react";
import "./lab3.css";

const Lab3 = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Directly set input as HTML without sanitization
    setResult(search);  // Directly set the input to result
  };

  return (
    <div className="lab3-container">
      <div className="lab3-box">
        <h1 className="lab3-title">DOM-Based XSS Lab</h1>
        <p className="lab3-description">
          In this lab, you can try injecting payloads to trigger DOM-based XSS.
          The injected payload will be executed directly on the DOM.
        </p>

        <form onSubmit={handleSubmit} className="lab3-form">
          <input
            type="text"
            placeholder="Inject payload here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="lab3-input"
          />
          <button type="submit" className="lab3-button">
            Inject
          </button>
        </form>

        <div className="lab3-output">
          <h3>Output:</h3>
          {/* Dangerous innerHTML rendering to allow XSS */}
          <div
            className="lab3-result-box"
            dangerouslySetInnerHTML={{ __html: result }} // Allows raw HTML injection
          />
        </div>
      </div>
    </div>
  );

 
};

export default Lab3;


// <img src="x" onerror="alert('XSS')">
// <a href="javascript:alert('XSS')">Click Me</a>
// <iframe src="data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4="></iframe>
