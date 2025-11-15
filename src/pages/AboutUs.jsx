import React from "react";

const styles = {
  container: {
    padding: "60px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6c63ff, #3edbf0)",  // ⭐ Background color added
    color: "white",
  },

  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "900px",
    margin: "0 auto",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "20px",
    textAlign: "center",
  },

  text: {
    fontSize: "20px",
    lineHeight: "1.8",
    marginBottom: "20px",
    color: "#f1f1f1",
  },

  highlight: {
    color: "#00eaff",
    fontWeight: "700",
  }
};

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Us</h1>

        <p style={styles.text}>
          Welcome to the <span style={styles.highlight}>Online Examination System</span>,
          a modern platform designed to make online tests fast, easy, and secure.
        </p>

        <p style={styles.text}>
          Our mission is to provide a seamless exam experience for students and a powerful
          management system for administrators. With automated scoring, real-time exams,
          and a beautiful interface, we bring modern exam technology to everyone.
        </p>

        <p style={styles.text}>
          Whether you are a school, college, coaching institute, or an organization, our 
          platform makes conducting online exams simple and efficient.
        </p>

        <p style={styles.text}>
          Thank you for using our system. We are committed to delivering the best digital
          exam experience possible.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
