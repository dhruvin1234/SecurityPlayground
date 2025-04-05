import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lab1.css";

const BasicSQLInjection = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMessage(data.message);
      
      if (data.message.includes("Login successful")) {
        setTimeout(() => navigate("/lab/sql-injection/lab1/sql_injection_flag1"), 2000);
      }
    } catch (error) {
      setMessage("Error connecting to server!");
    }
  };

  return (
    <div className="sql-lab-container">
      {/* 🔹 NAVBAR WITH DUMMY LINKS */}
      <nav className="navbar">
        <h2>Vulnerable Web App</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Admin Panel</a></li>  {/* Fake vulnerable link */}
        </ul>
        <button className="login-btn" onClick={() => setShowPopup(true)}>Login</button>
      </nav>

      {/* 🔹 LOGIN POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            <h2>Login</h2>
            <p className="instruction">Hint: Try SQL Injection to bypass authentication.</p> {/* ✅ Added instruction */}
            <form onSubmit={handleLogin}>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
            </form>
            <p className="message">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicSQLInjection;

// ' OR '1'='1' --