  import React, { useState, useEffect } from "react";
  import "./lab2.css";

  const SQLInjectionRetrieveHiddenData = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");

    const handleSearch = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch("http://localhost:5000/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ search }),
        });

        const data = await response.json();
        if (data.length === 0) {
          setMessage("No products found.");
        } else {
          setMessage("");
        }
        setProducts(data);
      } catch (error) {
        setMessage("Server error");
      }
    };

    return (
      <div className="sql-lab-container">
        {/* NAVBAR (same as lab1) */}
        <nav className="navbar">
          <h2>Vulnerable Web App</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Admin</a></li>
          </ul>
        </nav>

        {/* Search Panel */}
        <div className="search-section">
          <h2>🛍️ Product Finder</h2>
          <p className="hint">Try to reveal hidden product data using SQL Injection</p>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <button type="submit">Search</button>
          </form>
          <p className="message">{message}</p>
        </div>

        {/* Results */}
        <div className="product-grid">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              {product.description && <p><strong>Description:</strong> {product.description}</p>}
              {product.price && <p><strong>Price:</strong> ${product.price}</p>}
              {product.stock && <p><strong>In Stock:</strong> {product.stock}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default SQLInjectionRetrieveHiddenData;
