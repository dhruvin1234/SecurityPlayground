import React, { useState } from "react";
import "./lab1.css";

const Lab1 = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(search); // Reflect user input directly (XSS vulnerable)
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h1 className="lab1-title">Reflected XSS – Basic Alert Injection</h1>
        <p className="lab1-description">
          Enter a value in the field below. Try injecting a basic payload like
          <br />
          {/* <code>&lt;script&gt;alert("XSS")&lt;/script&gt;</code> */}
          {/* <script>alert("XSS")</script> */}
        </p>

        <form onSubmit={handleSubmit} className="lab1-form">
          <input
            type="text"
            placeholder="Try some input..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="lab1-input"
          />
          <button type="submit" className="lab1-button">Submit</button>
        </form>

        <div className="lab1-output">
          <h3>Search Result:</h3>
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

export default Lab1;
