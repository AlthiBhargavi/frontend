import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6c63ff, #3edbf0)",   // ⭐ NEW BACKGROUND
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },

  card: {
    background: "rgba(255, 255, 255, 0.2)",                    // ⭐ Glass effect
    backdropFilter: "blur(12px)",
    padding: "40px 50px",
    borderRadius: "20px",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  },

  title: {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "white",
    textAlign: "center",
  },

  list: {
    fontSize: "18px",
    color: "white",
    marginBottom: "30px",
    lineHeight: "1.7",
  },

  btn: {
    background: "#3edbf0",
    padding: "12px 25px",
    borderRadius: "10px",
    color: "white",
    border: "none",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
    boxShadow: "0 5px 15px rgba(62,219,240,0.5)",
    transition: "0.2s",
  },
};

const ExamInstructions = () => {
  const { examId } = useParams();
  const navigate = useNavigate();

  const startExam = () => {
    navigate(`/take-exam/${examId}`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Exam Instructions</h2>

        <ul style={styles.list}>
          <li>No negative marking.</li>
          <li>Each question carries 1 mark.</li>
          <li>Timer cannot be paused.</li>
          <li>Do not refresh or close the tab during the exam.</li>
        </ul>

        <button style={styles.btn} onClick={startExam}>
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamInstructions;
