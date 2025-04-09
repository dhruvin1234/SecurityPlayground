import React, { useState } from 'react';
import './lab2.css';

function Lab2() {
  const [ip, setIp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Pinging...');

    const start = Date.now();

    try {
      await fetch('http://localhost:5000/api/commandinjection/lab2/ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip }),
      });

      const end = Date.now();
      const diff = (end - start) / 1000;

      if (diff >= 5) {
        setMessage(`⚠️ Response delayed: Possible injection (response in ${diff.toFixed(1)}s)`);
      } else {
        setMessage(`✅ Normal response (response in ${diff.toFixed(1)}s)`);
      }
    } catch (err) {
      setMessage('❌ Error contacting server');
    }
  };

  return (
    <div className="lab2-container">
      <div className="lab2-box">
        <h2 className="lab2-title">Blind Command Injection</h2>
        <p className="lab2-description">check ping delays and how the server reacts!</p>
        <form onSubmit={handleSubmit} className="lab2-form">
          <input
            type="text"
            value={ip}
            placeholder="Enter IP address"
            onChange={(e) => setIp(e.target.value)}
            className="lab2-input"
          />
          <button type="submit" className="lab2-button">Ping</button>
        </form>
        <div className="lab2-output">
          <div className="lab2-result-box">{message}</div>
        </div>
      </div>
    </div>
  );
}

export default Lab2;


// google.com; sleep 4