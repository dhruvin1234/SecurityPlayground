const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = new sqlite3.Database(":memory:");

app.use(cors());
app.use(bodyParser.json());

// Setup: Create tables and insert sample data
db.serialize(() => {
  // Users table for Lab 1
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
  db.run("INSERT INTO users (username, password) VALUES ('admin', 'password123')");
  db.run("INSERT INTO users (username, password) VALUES ('user', 'userpass')");

  // Employees table for Lab 2
  db.run("CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, secret TEXT)");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Alice', 28, 'Top Secret 1')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Bob', 35, 'Top Secret 2')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Charlie', 40, 'Hidden Flag')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Eve', 45, 'Sensitive Info')");
});

// Lab 1 - Vulnerable login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  console.log("Login Query:", sql);

  db.get(sql, [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (row) {
      res.json({ message: `Login successful! Welcome, ${username}` });
    } else {
      res.json({ message: "Invalid credentials!" });
    }
  });
});



// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
