import React from "react";
import { Link } from "react-router-dom";

const styles = {
  page: {
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, #6c63ff, #3edbf0)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "white",
    textShadow: "0 3px 10px rgba(0,0,0,0.3)",
    marginBottom: "20px",
  },

  btnContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
  },

  button: {
    background: "#ffffffaa",
    padding: "12px 26px",
    borderRadius: "12px",
    color: "#004a64",
    fontSize: "18px",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
    backdropFilter: "blur(6px)",
    transition: "0.2s",
  },
};

const Animation = () => (
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      a.home-btn:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
    `}
  </style>
);

const Home = () => {
  return (
    <>
      <Animation />
      <div style={styles.page}>
        <h1 style={styles.title}>Welcome!</h1>
        <h1 style={{
  fontSize: "60px",
  fontWeight: "700",
  color: "white",
  textShadow: "0 3px 10px rgba(0,0,0,0.3)"
}}>
  Empowering Your Learning Journey
</h1>

        <div style={styles.btnContainer}>
          <Link to="/login" className="home-btn" style={styles.button}>
            Login
          </Link>

          <Link to="/register" className="home-btn" style={styles.button}>
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
