import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    padding: "40px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#6c63ff",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "30px",
    maxWidth: "700px",
    lineHeight: "1.6",
  },

  sectionTitle: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#444",
  },

  grid: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },

  card: {
    width: "280px",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    borderLeft: "6px solid #6c63ff",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
  },

  btn: {
    display: "block",
    marginTop: "15px",
    padding: "10px",
    textAlign: "center",
    background: "#3edbf0",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    textDecoration: "none",
  },
};

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <p style={styles.subtitle}>
        Welcome to the administrative control panel of the Online Examination
        System.  
        Here you can manage all examinations, create new tests, add questions,
        and monitor the complete system. Use the options below to manage the
        platform easily.
      </p>

      <h2 style={styles.sectionTitle}>Admin Tools</h2>

      <div style={styles.grid}>

        <div style={styles.card}>
          <h3>Create New Exam</h3>
          <p>Add exams for students, define titles and descriptions.</p>
          <Link style={styles.btn} to="/admin/add-exam">
            Add Exam
          </Link>
        </div>

        <div style={styles.card}>
          <h3>Add Questions</h3>
          <p>Insert MCQs for the exams you have created.</p>
          <Link style={styles.btn} to="/admin/add-question">
            Add Question
          </Link>
        </div>

        <div style={styles.card}>
          <h3>Manage Exams</h3>
          <p>View, update, or delete existing exams.</p>
          <Link style={styles.btn} to="#">
            Manage Exams
          </Link>
        </div>

        <div style={styles.card}>
          <h3>Student Results</h3>
          <p>View student marks, attempts, and performance reports.</p>
          <Link style={styles.btn} to="#">
            View Results
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
