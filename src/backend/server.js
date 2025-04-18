const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();
const db = new sqlite3.Database(":memory:");

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// ==================== DATABASE SETUP ====================
db.serialize(() => {
  // Users table for SQLi Lab 1
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
  db.run("INSERT INTO users (username, password) VALUES ('admin', 'password123')");
  db.run("INSERT INTO users (username, password) VALUES ('user', 'userpass')");

  // Employees table for SQLi Lab 2 (Union-Based Injection)
  db.run("CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT, price REAL)");

db.run("INSERT INTO products (id, name, price) VALUES (1, 'Laptop', 799.99)");
db.run("INSERT INTO products (id, name, price) VALUES (2, 'Smartphone', 499.99)");
db.run("INSERT INTO products (id, name, price) VALUES (3, 'Headphones', 99.99)");
db.run("INSERT INTO products (id, name, price) VALUES (4, 'Keyboard', 39.99)");
db.run("INSERT INTO products (id, name, price) VALUES (5, 'Monitor', 199.99)");

  
  db.run("CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, secret TEXT)");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Alice', 28, 'Top Secret 1')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Bob', 35, 'Top Secret 2')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Charlie', 40, 'Hidden Flag')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('Eve', 45, 'Sensitive Info')");
  db.run("INSERT INTO employees (name, age, secret) VALUES ('mukhi', 65, 'not good well')");
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

// ==================== SQL INJECTION LAB 2 ====================
app.get("/api/products", (req, res) => {
  const id = req.query.id;

  // Basic query to fetch product info
  const query = `SELECT name, price FROM products WHERE id = ${id}`;

  // Union-based query fetching from employees table
//  const unionQuery = `SELECT name, secret AS price FROM employees WHERE id = ${id}`;  // Aliasing `secret` to match column names
  
  // SQL query with UNION
  // const sql = ${query};

  console.log("[+] Executing Query:", query);

  db.all(query, (err, rows) => {
    if (err) {
      console.error("SQL Error:", err.message);
      return res.status(500).json({ error: 'SQL Error' });
    }
    console.log("[+] Query Results:", rows); // Log the query results for debugging
    res.json(rows); // Send the results to the frontend
  });
});

// ==================== SQL INJECTION LAB 3 ====================
app.get("/api/products/lab3", (req, res) => {
  const id = req.query.id;

  // Basic query to fetch product info
  // const query = `SELECT name, price FROM products WHERE id = ${id}`;

  // Union-based query fetching from employees table
 const unionQuery = `SELECT name, secret FROM employees WHERE id = ${id}`;  // Aliasing `secret` to match column names
  
  // SQL query with UNION
  // const sql = ${query};

  console.log("[+] Executing Query:", unionQuery);

  db.all(unionQuery, (err, rows) => {
    if (err) {
      console.error("SQL Error:", err.message);
      return res.status(500).json({ error: 'SQL Error' });
    }
    console.log("[+] Query Results:", rows); // Log the query results for debugging
    res.json(rows); // Send the results to the frontend
  });
});

// ==================== SQL INJECTION LAB 4 ====================
// Vulnerable SQL injection endpoint
app.get('/lab4', (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM employees WHERE id = ${id}`; // Vulnerable to SQLi

  db.get(query, (err, row) => {
    if (err) {
      res.send(`SQL Error: ${err.message}`);
    } else if (row) {
      res.send(`Name: ${row.name}\nAge: ${row.age}\nSecret: ${row.secret}`);
    } else {
      res.send("No employee found with that ID.");
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


// ==================== SSTI LAB 1 ====================
app.post("/api/ssti/lab1", (req, res) => {
  const { template } = req.body;

  if (!template) {
    return res.status(400).json({ error: "Template input is required" });
  }

  try {
    // ⚠️ Intentionally vulnerable EJS rendering (for lab purpose)
    const output = ejs.render(template);
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: "Template render failed", details: err.message });
  }
});

// ==================== ENV VAR LEAK LAB 2 ====================
app.post("/api/ssti/lab2", (req, res) => {
  const { template } = req.body;

  if (!template) {
    return res.status(400).json({ error: "Template input is required" });
  }

  try {
    // ⚠️ Deliberately insecure EJS rendering
    const output = ejs.render(template, { process });
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: "Template render failed", details: err.message });
  }
});

// ==================== SSTI LAB 3 ====================
app.post("/api/ssti/lab3", (req, res) => {
  const { emailTemplate } = req.body;

  if (!emailTemplate) {
    return res.status(400).json({ error: "Template input is required" });
  }

  try {
    // ❗ Intentionally vulnerable: Pass access to entire Node.js environment
    const output = ejs.render(emailTemplate, { process, require, global });
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: "Template render failed", details: err.message });
  }
});



// ==================== SSRF LAB 1 ====================
app.post("/api/ssrf/lab1", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL input is required" });
  }

  try {
    const response = await fetch(url, { timeout: 3000 });
    const body = await response.text();
    res.json({ body });
  } catch (err) {
    res.json({
      error: "Failed to fetch URL",
      message: err.message || "Unknown error occurred",
    });
  }
});

// ==================== INTERNAL MOCK SERVICE ====================
app.get("/", (req, res) => {
  res.send("🛡️ Hello from internal service at 127.0.0.1!");
});


// ==================== Start Server on Port 80 ====================
app.listen(80, () => {
  console.log("🚀 Server running on http://127.0.0.1 (port 80)");
});




// ==================== SSRF LAB 2 ====================
app.post("/api/ssrf/lab2", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL input is required" });
  }

  try {
    const response = await fetch(url, { timeout: 3000 });

    const contentType = response.headers.get("content-type") || "";
    const headers = Object.fromEntries(response.headers.entries());
    const status = response.status;

    if (contentType.startsWith("image/")) {
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const dataUrl = `data:${contentType};base64,${base64}`;
      return res.json({ type: "image", dataUrl, status, headers });
    }

    const body = await response.text();
    res.json({ type: "text", body, status, headers });

  } catch (err) {
    res.json({
      error: "Failed to fetch URL",
      message: err.message || "Unknown error occurred",
    });
  }
});


// ==================== SSRF LAB 3 ====================
app.post("/api/ssrf/lab3", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL input is required" });
  }

  // ✅ Whitelisted domains
  const WHITELIST = ["example.com", "trusted.com", "images.com"];

  try {
    // ✅ Decode tricky encodings
    const decodedUrl = decodeURIComponent(url);
    const parsedUrl = new URL(decodedUrl);

    const rawHostname = parsedUrl.hostname.toLowerCase();
    const rawHost = parsedUrl.host.toLowerCase(); // includes port
    const rawHref = parsedUrl.href.toLowerCase();

    // ✅ Fake weak check (intentionally flawed)
    const isAllowed = WHITELIST.some(domain =>
      rawHostname.endsWith(domain) ||             // endsWith 'example.com'
      rawHost.includes(domain) ||                 // 'example.com@127.0.0.1'
      rawHref.includes(domain)                    // any trick in full URL
    );

    if (!isAllowed) {
      return res.json({
        blocked: true,
        message: "❌ URL not in whitelist",
      });
    }

    // ✅ Fetch the resource
    const response = await fetch(decodedUrl, { timeout: 3000 });
    const contentType = response.headers.get("content-type") || "";
    const headers = Object.fromEntries(response.headers.entries());
    const status = response.status;

    // ✅ Internal service check (based on expected payload)
    if (parsedUrl.hostname === "127.0.0.1" || parsedUrl.hostname === "localhost") {
      return res.json({
        bypassed: true,
        message: "Hello from internal service at 127.0.0.1!",
      });
    }

    // ✅ Image handling
    if (contentType.startsWith("image/")) {
      const buffer = await response.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const dataUrl = `data:${contentType};base64,${base64}`;
      return res.json({
        isImage: true,
        status,
        contentType,
        dataUrl,
        headers,
      });
    }

    // ✅ Regular body response
    const body = await response.text();
    res.json({
      isImage: false,
      status,
      contentType,
      body,
      headers,
    });

  } catch (err) {
    res.json({
      error: true,
      body: "❌ Failed to fetch URL",
      message: err.message || "Unknown error occurred",
    });
  }
});

// ==================== SSRF LAB 4 ====================
app.get("/", (req, res) => {
  res.send("🎉 Hello from internal server!");
});

// ==================== SSRF LAB 4 ====================
app.post("/api/ssrf/lab4", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL input is required" });
  }

  try {
    const decodedUrl = decodeURIComponent(url);

    if (
      (decodedUrl.includes("localhost") || decodedUrl.includes("127.0.0.1")) &&
      !decodedUrl.includes(":5000")
    ) {
      return res.json({
        error: true,
        message: "❌ Blocked request to internal service (localhost/127.0.0.1), except port 5000",
        blocked: true,
      });
    }

    // Follow redirect
    const response = await fetch(decodedUrl, { redirect: "follow", timeout: 3000 });
    const contentType = response.headers.get("content-type") || "";
    const body = await response.text();

    // Check if content is an image
    const isImage = contentType.startsWith("image");
    let dataUrl = null;

    if (isImage) {
      const buffer = Buffer.from(body, "binary");
      dataUrl = `data:${contentType};base64,${buffer.toString("base64")}`;
    }

    res.json({
      status: response.status,
      contentType,
      isImage,
      body: isImage ? null : body,
      dataUrl,
      bypassed: decodedUrl.includes("httpbin.org") && decodedUrl.includes("127.0.0.1"),
    });
  } catch (err) {
    console.error("SSRF error:", err.message);
    res.json({
      error: true,
      message: "❌ Failed to fetch URL",
    });
  }
});

// ==================== SSRF LAB 5 ====================

// Serve the secret.txt file
app.get('/secret.txt', (req, res) => {
  const filePath = path.join(__dirname, 'secret.txt');
  res.sendFile(filePath);
});

// Handle SSRF fetch
app.post('/fetch-url', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, message: 'No URL provided' });
  }

  try {
    const response = await fetch(url);
    const text = await response.text();

    if (response.ok) {
      return res.status(200).json({
        success: true,
        message: 'Request sent successfully',
        content: text
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch URL',
        content: text
      });
    }
  } catch (error) {
    console.error('Error fetching URL:', error);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while fetching URL'
    });
  }
});



// ========== SSRF LAB 6 ==========
app.post('/api/ssrf-lab6', async (req, res) => {
  const { url } = req.body;

  try {
    if (url.startsWith('file://')) {
      const filePath = url.replace('file://', '');
      const content = fs.readFileSync(filePath, 'utf-8');
      return res.json({ content });
    } else {
      const response = await axios.get(url);
      return res.json({ content: response.data });
    }
  } catch (err) {
    console.error('Error fetching content:', err);
    return res.json({ error: err.message });
  }
});


// ========== FILE UPLOAD LAB 1 ==========

// Enable CORS
app.use(cors());

// Serve static files from uploads/
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup – no file type validation
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // keep original filename
  },
});

const upload = multer({ storage: storage });

// Route to handle file upload
app.post("/lab1/upload", upload.single("file"), (req, res) => {
  console.log("Uploaded file:", req.file.originalname);
  res.status(200).send("File uploaded successfully!");
});


// ========== FILE UPLOAD LAB 2 ==========
const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const original = file.originalname;
    const lastDotIndex = original.lastIndexOf('.');

    // Remove the last extension (e.g., ".png" in "shell.php.png")
    const modifiedName = original.substring(0, lastDotIndex);
    cb(null, modifiedName);
  },
});

const upload2 = multer({ storage: storage2 });

app.post('/lab2/upload', upload2.single('file'), (req, res) => {
  // Get the original name (before removing the last extension)
  const originalName = req.file.originalname;
  const lastExt = path.extname(originalName).toLowerCase();

  const allowedExtensions = ['.jpg', '.png', '.gif'];

  // Allow only if the *last* extension is valid
  if (allowedExtensions.includes(lastExt)) {
    res.send('File uploaded successfully!');
  } else {
    res.status(400).send('File type not allowed');
  }
});




// ==================== START SERVER ====================
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
