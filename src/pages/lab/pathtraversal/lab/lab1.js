import React, { useState } from "react";
import "./lab1.css";

const fileSystem = {
  "secret.txt": "This is a secret message stored in the file.",
  "public/readme.txt": "Welcome to Security Playground! This is the readme.",
  "../../etc/passwd": `
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
dhcp:x:101:101:DHCP server:/nonexistent:/usr/sbin/nologin
user:x:1000:1000:User:/home/user:/bin/bash
`,
  "../../home/user/.ssh/id_rsa": `
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAwI3zAozeb0AYr7H03W+F9d+RyU4EyLqe9vPYHwQ6rs4gvKNy
Q9G4NCKsYrqAr35HQjCn5psvKykK7cgIW3Z1ZwTQy6Z/bN6n0aF3x4GpglNcWqld
jre/JB3cwTrnczRch9NBzRKpAn3b0uRkKzY6j3GZNRJfs7Gp5XrhI5fMH8wQUpnk
2y+YwDjMmsPuID8nLRg12vGyObP0A3iS34Vo1QJBAOzBScF1mR0uXZkJzKzJH4yP
5zAk7qkP6wlAOd1x58Et7R9LKkZSEoHnEOkJGkqbJZbLzt7rXx4rXJdQkXYOP2To
N0tDNwIDAQABAoIBAQCENkx6Xs8kLnxzKeKkVKn6km+I+vQnUzhv8rRL1Fx5P8aV
ZzPN4y3EZfi7pTnkkKoXrlyP8nX9z6uOQq6iOp39Kk+STrcd9Iz7uAFMtHiJMjCI
S6VvUAsWJgEKBGFQ7HuGpRZ8Xo+F3Yg9KUlqgcn6Fxz+dJKCJ4J/FLdAwQ6zD0uK
0G+DCkq9YtxmcLV16MsU9jLR3WZtL9I5B9K8XhQCAwEAAQ==
-----END RSA PRIVATE KEY-----
`,
  "../../var/www/html/index.php": `
<?php echo "Welcome to the vulnerable site!"; ?>
`,
};

const Lab1 = () => {
  const [filePath, setFilePath] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedPath = filePath.trim();

    if (fileSystem[normalizedPath]) {
      setFileContent(fileSystem[normalizedPath]);
    } else {
      setFileContent("❌ File not found or access denied.");
    }
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h1 className="lab1-title">🗂️ Basic Path Traversal</h1>
        <p className="lab1-description">
          Try accessing files by entering paths like <code>secret.txt</code>
        </p>
        <form onSubmit={handleSubmit} className="lab1-form">
          <input
            type="text"
            className="lab1-input"
            placeholder="Enter file path (e.g., secret.txt)"
            value={filePath}
            onChange={(e) => setFilePath(e.target.value)}
          />
          <button type="submit" className="lab1-button">
            Read File
          </button>
        </form>
        <div className="lab1-output">
          <div className="lab1-result-box">
            <pre>{fileContent}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab1;
