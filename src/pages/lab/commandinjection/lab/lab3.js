import React, { useState } from 'react';
import './lab3.css';

function Lab3() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOutput('Running...');

    try {
      const res = await fetch('http://localhost:5000/api/commandinjection/lab3/run', {
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
    <div className="lab3-container">
      <div className="lab3-box">
        <h2 className="lab3-title">Whitelist Bypass Challenge</h2>
        <p className="lab3-description">Try running allowed commands and explore what’s really possible</p>
        <form onSubmit={handleSubmit} className="lab3-form">
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Enter a command (e.g., ping)"
            className="lab3-input"
          />
          <button type="submit" className="lab3-button">Run</button>
        </form>
        <div className="lab3-output">
          <div className="lab3-result-box">{output}</div>
        </div>
      </div>
    </div>
  );
}

export default Lab3;

// ping 8.8.8.8; cat /etc/passwd

// ping 127.0.0.1; whoami
