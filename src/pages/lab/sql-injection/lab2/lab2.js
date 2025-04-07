import React, { useState } from "react";
import "./lab2.css";
import axios from "axios";

function Lab2() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/lab2/search?name=${encodeURIComponent(input)}`);
      setResults(res.data);
      setError("");
    } catch (err) {
      setResults([]);
      setError(err.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <div className="lab2-container">
      <h2>SQL Injection Lab 2: Find Column Count</h2>
      <label>Employee name:</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter name or SQL payload"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error-msg">{error}</p>}

      {results.length > 0 && (
        <div>
          <h3>Results:</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Lab2;
