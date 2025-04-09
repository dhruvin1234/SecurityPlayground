import React, { useState } from 'react';
import './lab4.css';

function Lab4() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOutput('Running...');

    try {
      const res = await fetch('http://localhost:5000/api/commandinjection/lab4/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command }),
      });

      const data = await res.json();
      setOutput(data.output || 'No output');
    } catch (err) {
      setOutput('❌ Error contacting server');
    }
  };

  return (
    <div className="lab4-container">
      <div className="lab4-box">
        <h2 className="lab4-title">Filter Evasion Challenge</h2>
        <p className="lab4-description">Try to evade filters and execute commands creatively</p>
        <form onSubmit={handleSubmit} className="lab4-form">
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Enter a command (e.g., ping 127.0.0.1)"
            className="lab4-input"
          />
          <button type="submit" className="lab4-button">Run</button>
        </form>
        <div className="lab4-result-box">{output}</div>
      </div>
    </div>
  );
}

export default Lab4;
