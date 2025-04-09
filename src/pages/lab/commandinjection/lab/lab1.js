import React, { useState } from "react";
import "./lab1.css";

function Lab1() {
    const [ip, setIP] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/commandinjection/lab1/ping", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ip }),
        });

        const data = await res.json();
        if (data.output) {
            setResult(data.output);
        } else {
            setResult(data.error || "Unknown error");
        }
    };

    return (
        <div className="lab1-container">
            <div className="lab1-box">
                <h2 className="lab1-title">Command Injection Lab 1</h2>
                <p className="lab1-description">
                Enter an IP address to test network connectivity using the ping command.
                </p>
                <form onSubmit={handleSubmit} className="lab1-form">
                    <input
                        type="text"
                        placeholder="Enter IP address"
                        value={ip}
                        onChange={(e) => setIP(e.target.value)}
                        className="lab1-input"
                    />
                    <button type="submit" className="lab1-button">Ping</button>
                </form>
                {result && (
                    <div className="lab1-output">
                        <div className="lab1-result-box">
                            <pre>{result}</pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lab1;
