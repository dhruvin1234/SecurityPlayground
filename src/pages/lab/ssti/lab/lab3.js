import React, { useState } from "react";
import "./lab3.css";

const Lab3 = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/ssti/lab3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailTemplate: input }),
      });

      const data = await res.json();
      setResponse(data.output || "No output from server.");
    } catch (err) {
      setResponse("❌ Error: Could not fetch response from server.");
    }
  };

  return (
    <div className="lab3-container">
      <div className="lab3-box">
        <h1 className="lab3-title">📧 Email Template SSTI</h1>
        <p className="lab3-description">
          Test how SSTI can affect email rendering. Try something like:{" "}
          <code><code>{"{{ 7 * 7 }}"}</code>
          </code>
        </p>

        <form className="lab3-form" onSubmit={handleSubmit}>
          <textarea
            rows="4"
            className="lab3-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter email content with dynamic template code"
          />
          <button type="submit" className="lab3-button">Submit</button>
        </form>

        <div className="lab3-output">
          <h3>Email Rendered Output:</h3>
          <div
            className="lab3-result-box"
            dangerouslySetInnerHTML={{ __html: response }}
          />
        </div>
      </div>
    </div>
  );
};

export default Lab3;
