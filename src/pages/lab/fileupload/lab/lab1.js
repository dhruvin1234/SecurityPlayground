import React, { useState } from "react";
import "./lab1.css";
import axios from "axios";

const Lab1 = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/lab1/upload", formData);
      setMessage("File uploaded successfully!");
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="lab1-container">
      <div className="lab1-box">
        <h1 className="lab1-title">Lab 1: No File Type Validation</h1>
        <p className="lab1-description">
          Upload a .php reverse shell to exploit this vulnerability.
        </p>

        <form onSubmit={handleUpload} className="lab1-form">
          <input
            type="file"
            onChange={handleFileChange}
            className="lab1-input"
          />
          <button type="submit" className="lab1-button">
            Upload File
          </button>
        </form>

        {message && <p className="lab1-output">{message}</p>}
      </div>
    </div>
  );
};

export default Lab1;
