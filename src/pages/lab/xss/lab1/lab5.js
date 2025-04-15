// pages/lab/xss/lab5/lab5.jsx
import React, { useState } from "react";
import "./lab5.css";

const Lab5 = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize <script> tags
    const sanitizedInput = search.replace(/<script.*?>.*?<\/script>/gi, "[blocked script]");

    setResult(sanitizedInput);
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h1 className="lab1-title">XSS via Event Handlers</h1>
        <p className="lab1-description">
          Try injecting event-based payloads like:
          <br />
          {/* <code>{`<img src="x" onerror="alert('XSS')">`}</code> or{" "} */}
          {/* <code>{`<a href="#" onclick="alert('XSS')">Click</a>`}</code> */}
        </p>

        <form onSubmit={handleSubmit} className="lab1-form">
          <input
            type="text"
            placeholder="Inject event handler payload here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="lab1-input"
          />
          <button type="submit" className="lab1-button">
            Inject
          </button>
        </form>

        <div className="lab1-output">
          <h3>Output:</h3>
          <div
            className="lab1-result-box"
            ref={(el) => {
              if (el) {
                el.innerHTML = result;
                const scripts = el.getElementsByTagName("script");
                for (let script of scripts) {
                  eval(script.innerText);
                }
              }
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Lab5;


{/* <code>{`<img src="x" onerror="alert('XSS')">`}</code> or{" "} */}
{/* <code>{`<a href="#" onclick="alert('XSS')">Click</a>`}</code> */}