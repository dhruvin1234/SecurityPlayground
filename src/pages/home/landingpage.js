import React, { useEffect, useState } from "react";
import "./landingpage.css"; // Import the CSS file
import { Link } from "react-router-dom";


const LandingPage = () => {
    const text = "Cybersecurity is Not an Option, It’s a Necessity – Start Learning Now!";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
                setTimeout(() => setIndex(0), 3000); // Restart typing after 3 seconds
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [index]); // Dependency ensures effect runs each time `index` updates

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">🔒 SecurityPlayGround</div>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="/lab">Lab</a></li>
                        <li><a href="/insight">Insights</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1 className="typing-text">{displayedText}</h1>
                    <p>The internet is growing, and so are cyber threats. Learning cybersecurity helps you stay safe and protect others.Start now and build a secure future!</p>
                    <div className="buttons">
                        <a href="/insight" target="_blank" rel="noopener noreferrer">
                            <button className="video-btn">▶ Start Now</button>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default LandingPage;