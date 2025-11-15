import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, #6c63ff, #3edbf0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    width: "380px",
    borderRadius: "20px",
    textAlign: "center",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    marginBottom: "15px",
    fontSize: "16px",
  },

  btn: {
    width: "100%",
    padding: "14px",
    background: "#3edbf0",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    color: "white",
  },
};

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="email"
            placeholder="Admin Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.btn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
