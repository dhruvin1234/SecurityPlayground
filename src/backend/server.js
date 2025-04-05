const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = new sqlite3.Database(":memory:"); // Temporary database (resets on restart)

app.use(cors());
app.use(bodyParser.json());

// Create Users Table and Insert Sample Users
db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
  db.run("INSERT INTO users (username, password) VALUES ('admin', 'password123')");
  db.run("INSERT INTO users (username, password) VALUES ('user', 'userpass')");
});

// Vulnerable Login Endpoint (🚨 VULNERABLE TO SQL INJECTION 🚨)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 🚨 VULNERABLE QUERY (DO NOT USE IN PRODUCTION) 🚨
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Executing Query:", sql);

  db.get(sql, [], (err, row) => {
    if (row) {
      res.json({ message: `Login successful! Welcome, ${username}` });
    } else {
      res.json({ message: "Invalid credentials!" });
    }
  });
});

// Start Server
app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
