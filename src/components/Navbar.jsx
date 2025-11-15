import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";   // ⭐ Import Logo

const headerStyle = {
  width: "100%",
  padding: "20px 30px",
  background: "#6c63ff",
  color: "white",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
  flexWrap: "wrap",
};

const logoStyle = {
  fontSize: "26px",
  fontWeight: "700",
  marginRight: "420px",
};

const navStyle = {
  display: "flex",
  gap: "40px",
  fontSize: "18px",
};

const navItemStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  whiteSpace: "nowrap",
};

const Navbar = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div style={headerStyle}>
      {/* ⭐ Logo + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ width: "45px", height: "45px", borderRadius: "8px" }}
        />
        <span style={logoStyle}>Online Exam</span>
      </div>

      <nav style={navStyle}>
        <Link to="/" style={navItemStyle}>Home</Link>
        <Link to="/login" style={navItemStyle}>Login</Link>
        <Link to="/register" style={navItemStyle}>Register</Link>
        <Link to="/exams" style={navItemStyle}>Exams</Link>
        <Link to="/admin/login" style={navItemStyle}>Admin</Link>
        <Link to="/about" style={navItemStyle}>About Us</Link>

        <span onClick={handleLogout} style={{ ...navItemStyle, cursor: "pointer" }}>
          Logout
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
