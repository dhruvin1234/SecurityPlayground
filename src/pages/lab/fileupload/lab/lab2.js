import React, { useState } from "react";
import "./lab2.css";
import axios from "axios";

const Lab2 = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/lab2/upload", formData);
      setMessage("File uploaded successfully! Try exploiting the vulnerability by uploading a .php file disguised as another extension.");
    } catch (error) {
      setMessage("File type not allowed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lab2-container">
      <div className="lab2-box">
        <h1 className="lab2-title">Lab 2: File Extension Bypass</h1>
        <p className="lab2-description">Upload a malicious .php file disguised as an image or another allowed file type.</p>

        <form onSubmit={handleUpload} className="lab2-form">
          <input type="file" onChange={handleFileChange} className="lab2-input" />
          <button type="submit" disabled={loading} className="lab2-button">
            {loading ? "Uploading..." : "Upload File"}
          </button>
        </form>

        <div className="lab2-output">
          <div className="lab2-result-box">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Lab2;

// shell.php.png

// php -S localhost:8000 -t uploads/

// http://localhost:8000/shell.php
