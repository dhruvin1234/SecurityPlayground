import React, { useState } from "react";
import axios from "axios";
import "./lab3.css";  // Include CSS for styling

const Lab3 = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [fileLink, setFileLink] = useState("");

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
      const response = await axios.post("http://localhost:8000/upload", formData);
      setMessage("File uploaded successfully!");
      setFileLink(response.data); // Save the file URL to show to the user
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="lab3-container">
      <h1>Lab 3: Public Upload Directory</h1>
      <p>Upload a file to the server and access it publicly.</p>

      <form onSubmit={handleUpload} className="lab3-form">
        <input
          type="file"
          onChange={handleFileChange}
          className="lab3-input"
        />
        <button type="submit" className="lab3-button">
          Upload File
        </button>
      </form>

      {message && <p className="lab3-output">{message}</p>}
      {fileLink && (
        <div className="lab3-result">
          <p>Access your file here:</p>
          <a href={fileLink} target="_blank" rel="noopener noreferrer">
            {fileLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default Lab3;
