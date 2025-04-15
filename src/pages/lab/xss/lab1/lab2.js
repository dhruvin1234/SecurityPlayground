import React, { useState } from "react";
import "./lab2.css";

const XSSLab2 = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="lab2-container">
      <div className="lab2-box">
        <h1 className="lab2-title">Stored XSS Lab 2</h1>
        <p className="lab2-description">
          Anything you submit will be rendered below. Try injecting a payload!
        </p>

        <form className="lab2-form" onSubmit={handleSubmit}>
          <textarea
            className="lab2-input"
            placeholder="Enter your comment (e.g., <script>alert(1)</script>)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
          />
          <button type="submit" className="lab2-button">
            Submit
          </button>
        </form>

        <div className="lab2-output">
          <h2>Comments:</h2>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="lab2-result-box"
              dangerouslySetInnerHTML={{ __html: comment }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default XSSLab2;

//this all paload work here
// img src=x onerror=alert('XSS')>

  // <svg onload=alert('XSS')>

// <iframe src="javascript:alert('XSS')">

// <video><source onerror="alert('XSS')">

// <a href="javascript:alert('XSS')">Click</a>

