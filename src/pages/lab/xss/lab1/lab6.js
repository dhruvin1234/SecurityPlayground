// pages/lab/xss/lab6/lab6.jsx
import React, { useState } from "react";
import "./lab6.css";

const Lab6 = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic filters - blocks common dangerous patterns
    let filteredInput = search;

    // Block <script> tags
    filteredInput = filteredInput.replace(/<script.*?>.*?<\/script>/gi, "[blocked script]");

    // Block onerror/onload/on* attributes
    filteredInput = filteredInput.replace(/on\w+=".*?"/gi, "[blocked attribute]");

    // Block javascript: protocol
    filteredInput = filteredInput.replace(/javascript:/gi, "[blocked js]");

    // Block <iframe ...>
    filteredInput = filteredInput.replace(/<iframe.*?>.*?<\/iframe>/gi, "[blocked iframe]");

    setResult(filteredInput);
  };

  return (
    <div className="lab6-container">
      <div className="lab6-box">
        <h1 className="lab6-title">XSS Filter Bypass Lab</h1>
        <p className="lab6-description">
          Basic filters block <code>&lt;script&gt;</code>, <code>onerror=</code>, <code>javascript:</code>, and <code>&lt;iframe&gt;</code>.
          Try creative tricks to bypass them!
        </p>

        <form onSubmit={handleSubmit} className="lab6-form">
          <input
            type="text"
            placeholder="Try to bypass the filter..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="lab6-input"
          />
          <button type="submit" className="lab6-button">
            Inject
          </button>
        </form>

        <div className="lab6-output">
          <h3>Output:</h3>
          <div
            className="lab6-result-box"
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

export default Lab6;






// <img src="x" oNerror=alert(1)>
// <img src=x oNerror=prompt(1)>	
// <scr<script>ipt>alert(1)</scr</script>ipt>