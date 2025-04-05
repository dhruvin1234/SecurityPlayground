import React from "react";
import "./sql_injection_flag2.css";  // Make sure the CSS file exists

const SQL_INJECTION_SUCCESS = "FLAG{SQL_INJECTION_SUCCESS_123456}";  // ✅ Define the flag here

const SQLInjectionFlag1 = () => {
  return (
    <div className="lab1-container">
      <div className="flag-container">
        <h2>Congratulations! 🎉</h2>
        <p>You have successfully exploited the SQL Injection vulnerability!</p>
        <h3 className="flag">Your Flag: {SQL_INJECTION_SUCCESS}</h3>
      </div>
    </div>
  );  
};

export default SQLInjectionFlag1;