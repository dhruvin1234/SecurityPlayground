import React, { useState } from 'react';
import './lab3.css';

function Lab3() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/lab3?id=${encodeURIComponent(input)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setResults([]);
      } else {
        setResults(data);
        setError('');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Something went wrong with the fetch request.');
      setResults([]);
    }
  };

  const handleInfo = () => {
    setMessage("Use the UNION SELECT technique to try retrieving data from another table.");
    setError('');
  };

  return (
    <div className="sqllab3-wrapper">
      <div className="sqllab3-container">
        <h1>Retrieve Data from Table using UNION-based Injection</h1>
        <p>Use UNION SELECT to fetch additional data such as usernames or secrets from another table.</p>
        <button onClick={handleInfo}>Show UNION Instructions</button>
        <input
          type="text"
          placeholder="Enter product ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>

        {message && <p className="sqllab3-message">{message}</p>}
        {error && <p className="sqllab3-error">{error}</p>}

        <div className="sqllab3-results">
          <h3>Results:</h3>
          {results.map((item, index) => (
            <p key={index}>{item.name} - {item.price || item.secret}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lab3;


// 1 ORDER BY 1--
// 1 ORDER BY 2--
// 1 ORDER BY 3--


// -1 UNION SELECT 'test1', 'test2'--
// -1 UNION SELECT username, password FROM users--
