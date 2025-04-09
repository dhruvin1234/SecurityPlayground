// pages/lab/xss/lab4/lab4.jsx
import React, { useState } from "react";
import "./lab4.css";

function XSSLab4() {
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");

    const showImage = () => {
        // ⚠️ Vulnerable injection point (intentionally)
        setContent(`<img src="${imageUrl}" alt="XSS Test">`);
    };

    return (
        <div className="lab4-container">
            <h1 className="lab4-title">Lab 4: XSS in HTML Tag Attributes</h1>
            <p className="lab4-description">
                Enter an image URL or try injecting into an attribute:
            </p>
            <div className="lab4-input-group">
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder={`x" onerror="alert('XSS')`}
                    className="lab4-input"
                />
                <button onClick={showImage} className="lab4-button">
                    Show Image
                </button>
            </div>
            <div
                id="image-container"
                className="lab4-output"
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
        </div>
    );
}

export default XSSLab4;


// x" onerror="alert('XSS')
// " onerror="alert(1)
// "onerror=alert('XSS') src=x
// x" onclick="alert('XSS')"