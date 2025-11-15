import { useState } from "react";
import API from "../services/api";  // <-- FIXED
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
    width: "380px",
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

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", { 
        name, 
        email, 
        password 
      });

      alert(res.data.message || "Registration successful!");

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <>
      <Animation />

      <div style={styles.page}>
        <div style={styles.box}>
          <h2 style={styles.title}>Register</h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              style={styles.input}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button style={styles.btn}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
