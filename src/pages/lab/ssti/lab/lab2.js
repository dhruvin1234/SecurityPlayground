import React, { useState } from "react";
import "./lab2.css";

const Lab2 = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/ssti/lab2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ template: input }),
    });

    const data = await res.text();
    setResponse(data);
  };

  return (
    <div className="lab2-container">
      <div className="lab2-box">
        <h1 className="lab2-title">🕵️ Environment Variable Leak</h1>
        <p className="lab2-description">
          Try accessing variables like: <code>&lt;%= process.env %&gt;</code> or <code>&lt;%= process.env.PATH %&gt;</code>
        </p>

        <form className="lab2-form" onSubmit={handleSubmit}>
          <textarea
            className="lab2-input"
            rows="4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inject a template here..."
          />
          <button className="lab2-button" type="submit">Submit</button>
        </form>

        <div className="lab2-output">
          <h3>Server Response:</h3>
          <div className="lab2-result-box" dangerouslySetInnerHTML={{ __html: response }} />
        </div>
      </div>
    </div>
  );
};

export default Lab2;


// <%= process.env %>

// <%= process.env.USER %>

// <%= process.env.HOME %>

// <%= process.env.PATH %>

