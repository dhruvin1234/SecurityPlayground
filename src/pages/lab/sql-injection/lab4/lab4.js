import React, { useState } from 'react';
import './lab4.css';

function Lab4() {
  const [id, setId] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/lab4?id=${id}`);
      const data = await res.text();
      setResult(data);
    } catch (error) {
      setResult('❌ Error connecting to server.');
    }
  };

  return (
    <div className="sqllab4-wrapper">
      <div className="sqllab4-container">
        <h2>💥 Error-Based SQL Injection</h2>
        <p>Submit a student ID to test for SQL errors and extract database info through error messages.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter student ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="sqllab4-results">
          <h4>Results:</h4>
          <pre>{result}</pre>
        </div>
      </div>
    </div>
  );
}

export default Lab4;


// 1 ORDER BY 5--+
// 1 UNION SELECT NULL,NULL,NULL FROM employees--+
// 1 UNION SELECT NULL,NULL,NULL,NULL FROM employees--+