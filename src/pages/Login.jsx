import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, #6c63ff, #3edbf0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  box: {
    background: "white",
    padding: "40px 50px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    textAlign: "center",
    animation: "fadeIn 0.8s ease-in-out",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#6c63ff",
    marginBottom: "25px",
    textShadow: "0 2px 6px rgba(108,99,255,0.3)",
  },

  label: {
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "left",
    display: "block",
    marginBottom: "8px",
    color: "#333",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "2px solid #ccc",
    marginBottom: "20px",
    fontSize: "16px",
    outline: "none",
  },

  btn: {
    width: "100%",
    background: "#3edbf0",
    padding: "12px",
    borderRadius: "10px",
    color: "white",
    fontSize: "20px",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(62,219,240,0.4)",
    transition: "0.2s",
  },
};

const Animation = () => (
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
      button:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(62,219,240,0.7);
      }
    `}
  </style>
);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", { email, password });

      // save token
      localStorage.setItem("token", res.data.token);

      alert("Login successful!");
      navigate("/exams");  // redirect to exams page

    } catch (err) {
      alert("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <>
      <Animation />
      <div style={styles.page}>
        <div style={styles.box}>
          <h1 style={styles.title}>Login</h1>

          <form onSubmit={handleLogin}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button style={styles.btn}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
