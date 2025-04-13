// lab6.js

import React, { useState } from 'react';
import './lab6.css';

function Lab6() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('');
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/ssrf-lab6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.content);
      }
    } catch (err) {
      console.error('Fetch failed:', err);
      setError('Failed to fetch content.');
    }
  };

  return (
    <div className="lab6-container">
      <h2>Lab 6: SSRF for File Access</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a URL (http:// or file://)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Fetch</button>
      </form>

      {result && (
        <div className="response-box">
          <h4>Response:</h4>
          <pre>{result}</pre>
        </div>
      )}

      {error && (
        <div className="error-box">
          <h4>Error:</h4>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default Lab6;
