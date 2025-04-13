import React from "react";
import "./lab1.css";

const Lab1 = () => {
  return (
    <div className="lab1-wrapper">
      {/* ✅ Simulated sensitive developer comments */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <!-- TODO: Remove temp admin login -->
            <!-- Username: test_admin | Password: test@123 -->
            <!-- Hidden panel: /dev-beta-panel -->
          `,
        }}
      />

      <nav className="navbar">
        <div className="logo">🛍️ MyShop</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Offers</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to MyShop</h1>
        <p>Your one-stop shop for amazing products.</p>
      </header>

      <section className="products">
        <div className="product-card">
          <img src="" />
          <h3>Hacker Laptop Sticker</h3>
          <p>Style your gear like a pro — $5</p>
        </div>
        <div className="product-card">
          <img src="" />
          <h3>PenTest Toolkit</h3>
          <p>All tools pre-installed on USB — $30</p>
        </div>
        <div className="product-card">
          <img src="" />
          <h3>Red Team Hoodie</h3>
          <p>Look sharp. Think sharp. — $40</p>
        </div>
        <div className="product-card">
          <img src=""/>
          <h3>CTF Champion Mug</h3>
          <p>Fuel your reverse engineering — $15</p>
        </div>
        <div className="product-card">
          <img src=" "/>
          <h3>Bug Bounty Notebook</h3>
          <p>Log every bounty like a hacker — $10</p>
        </div>
        <div className="product-card">
          <img src="https://i.imgur.com/Esv1ZWo.png" alt="Root Access Cap" width="100" />
          <h3>Root Access Cap</h3>
          <p>Top off your pwnage — $18</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 MyShop Inc.</p>
      </footer>
    </div>
  );
};

export default Lab1;
