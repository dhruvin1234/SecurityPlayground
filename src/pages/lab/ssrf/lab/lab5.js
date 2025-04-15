// lab5.js
import React, { useState } from 'react';
import axios from 'axios';
import './lab5.css';

const Lab5 = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/fetch-url', { url });

      if (res.data.success) {
        setMessage(res.data.content); // Show file/content response
      } else {
        setMessage('Something went wrong');
      }
    } catch (error) {
      setMessage('Error: Could not connect to the server');
    }
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h2 className="lab1-title">Blind SSRF Lab</h2>
        <p className="lab1-description">Enter a URL. The server will fetch it and return the response content.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={url}
              onChange={handleInputChange}
              placeholder="http://127.0.0.1:5000/secret.txt"
              required
            />
            <button type="submit">Submit</button>
          </div>
        </form>

        {message && (
          <div className="lab1-result-box">
            <h3>Response:</h3>
            <pre>{message}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lab5;
