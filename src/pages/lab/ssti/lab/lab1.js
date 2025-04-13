import React, { useState } from "react";
import "./lab1.css";

const Lab1 = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/ssti/lab1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ template: input }),
      });

      const data = await res.json();
      setResponse(data.output || "No output from server.");
    } catch (err) {
      setResponse("❌ Error: Could not fetch response from server.");
    }
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h1 className="lab1-title">🧪 Basic SSTI Injection</h1>
        <p className="lab1-description">
          Try injecting template code like: <code>&lt;%= 7 * 7 %&gt;</code>
        </p>
  
        <form className="lab1-form" onSubmit={handleSubmit}>
          <textarea
            rows="4"
            className="lab1-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter input for the template engine"
          />
          <button type="submit" className="lab1-button">Submit</button>
        </form>
  
        <div className="lab1-output">
          <h3>Server Response:</h3>
          <div
            className="lab1-result-box"
            dangerouslySetInnerHTML={{ __html: response }}
          />
        </div>
      </div>
    </div>
  );
};

export default Lab1;

// <%= 7 * 7 %>