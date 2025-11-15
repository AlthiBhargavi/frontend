import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  page: {
    padding: "40px",
    minHeight: "100vh",
    background: "white",
  },

  title: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#6c63ff",
    marginBottom: "20px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    borderLeft: "6px solid #6c63ff",
  },

  examName: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  examDesc: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },

  btn: {
    display: "inline-block",
    background: "#3edbf0",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 4px 10px rgba(62,219,240,0.4)",
    transition: ".2s",
  },
};

const Exams = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // ⭐ Adding sample exams manually
    setExams([
      {
        _id: "1",
        title: "Mathematics Exam",
        description: "Algebra, Geometry, Trigonometry, and Calculus basics.",
      },
      {
        _id: "2",
        title: "Science Exam",
        description: "Physics, Chemistry & Biology fundamentals.",
      },
      {
        _id: "3",
        title: "English Grammar Exam",
        description: "Grammar rules, vocabulary & comprehension.",
      },
      {
        _id: "4",
        title: "Computer Basics Exam",
        description: "MS Office, Internet, Email, and basic hardware.",
      },
      {
        _id: "5",
        title: "Java Programming Exam",
        description: "OOP, classes, loops, arrays & functions.",
      },
    ]);
  }, []);

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Available Exams</h2>

      <div style={styles.container}>
        {exams.map((exam) => (
          <div key={exam._id} style={styles.card}>
            <p style={styles.examName}>{exam.title}</p>
            <p style={styles.examDesc}>{exam.description}</p>

            <Link to={`/exam-instructions/${exam._id}`} style={styles.btn}>
              Start Exam
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams; 