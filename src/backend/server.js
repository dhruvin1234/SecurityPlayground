const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
const db = new sqlite3.Database(":memory:");

app.use(cors());
app.use(bodyParser.json());

// ==================== DATABASE SETUP ====================
db.serialize(() => {
  // Users table for SQLi Lab 1
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
  db.run("INSERT INTO users (username, password) VALUES ('admin', 'password123')");
  db.run("INSERT INTO users (username, password) VALUES ('user', 'userpass')");

  // Employees table for SQLi Lab 2
  db.run("CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, secret TEXT)");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Alice', 28, 'Top Secret 1')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Bob', 35, 'Top Secret 2')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Charlie', 40, 'Hidden Flag')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Eve', 45, 'Sensitive Info')");
});

// ==================== SQL INJECTION LAB 1 ====================
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

// ==================== COMMAND INJECTION LAB 1 ====================
app.post("/api/commandinjection/lab1/ping", (req, res) => {
  const { ip } = req.body;

  if (!ip) {
    return res.status(400).json({ error: "IP address required" });
  }

  const command = `ping -c 2 ${ip}`;
  console.log("Command Executed:", command);

  exec(command, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ output: stdout });
  });
});

// ==================== BLIND COMMAND INJECTION LAB 2 ====================
// ==================== BLIND COMMAND INJECTION LAB 2 ====================
app.post("/api/commandinjection/lab2/ping", (req, res) => {
  const { ip } = req.body;

  if (!ip) {
    return res.status(400).json({ error: "IP address is required" });
  }

  // Injecting through shell explicitly
  const command = `ping -c 1 ${ip}`;
  console.log("Blind Command Executed:", command);

  exec(command, { shell: "/bin/bash" }, (error) => {
    if (error) {
      console.log("Error:", error.message);
    }
    res.sendStatus(200); // Always return 200, no matter what
  });
});


// ==================== BLIND COMMAND INJECTION LAB 3 ====================
app.post("/api/commandinjection/lab3/run", (req, res) => {
  const { command } = req.body;

  // Whitelist filter: only allow 'ping' commands
  if (!/^ping\s/.test(command)) {
    return res.json({ output: "❌ Command not allowed." });
  }

  console.log("Whitelist Bypass Command:", command);

  // IMPORTANT: Limit ping to avoid infinite command execution
  const safeCommand = command.replace(/^ping\s+/, "ping -c 3 ");

  exec(safeCommand, { shell: "/bin/bash" }, (err, stdout, stderr) => {
    if (err) {
      return res.json({ output: stderr || err.message });
    }
    res.json({ output: stdout || "✅ Command ran, but no output." });
  });
});


// ==================== FILTER EVASION LAB 4 ====================
app.post("/api/commandinjection/lab4/run", (req, res) => {
  const { command } = req.body;

  const forbidden = [';', '|', '>', '<', '`']; // Not blocking $IFS or &&
  for (const bad of forbidden) {
    if (command.includes(bad)) {
      return res.json({ output: "❌ Forbidden character detected." });
    }
  }

  if (!command.startsWith("ping")) {
    return res.json({ output: "❌ Only 'ping' command allowed." });
  }

  console.log("Lab 4 Command:", command);

  exec(command, { shell: "/bin/bash" }, (err, stdout, stderr) => {
    if (err) return res.json({ output: stderr || err.message });
    res.json({ output: stdout });
  });
});


// ==================== START SERVER ====================
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
