import React, { useState } from "react";
import "./lab2.css";

const XSSLab2 = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      console.log("Stored comment:", input); // ✅ log for debugging
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="lab2-container">
      <h1>Stored XSS Lab 2</h1>
      <p>Anything you submit will be rendered below.</p>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your comment (try XSS payload)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="comments-section">
        <h2>Comments:</h2>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="comment"
            dangerouslySetInnerHTML={{ __html: comment }}
          />
        ))}
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