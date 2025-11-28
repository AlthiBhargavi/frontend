import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// -------------------------------------------
// ⭐ ALL EXAM QUESTION BANK HERE
// -------------------------------------------
const questionBank = {
  1: [
    { q: "2 + 5 = ?", options: ["6", "7", "8"], ans: "7" },
    { q: "Square root of 81?", options: ["7", "9"], ans: "9" }
  ],

  2: [
    { q: "Water formula?", options: ["H2O", "CO2"], ans: "H2O" },
    { q: "Planet known as the Red Planet?", options: ["Mars", "Venus"], ans: "Mars" }
  ],

  3: [
    { q: "Choose the noun:", options: ["Run", "Dog"], ans: "Dog" },
    { q: "Plural of 'Child'?", options: ["Children", "Childs"], ans: "Children" }
  ],

  4: [
    { q: "CPU stands for?", options: ["Central Processing Unit", "Computer Personal Unit"], ans: "Central Processing Unit" },
    { q: "Shortcut for Copy?", options: ["Ctrl + V", "Ctrl + C"], ans: "Ctrl + C" }
  ],

  5: [
    { q: "Java is?", options: ["Compiled", "Both compiled & interpreted"], ans: "Both compiled & interpreted" },
    { q: "Which keyword creates an object?", options: ["new", "class"], ans: "new" }
  ]
};
// -------------------------------------------


// -------------------------------------------
// ⭐ UI STYLES
// -------------------------------------------
const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6c63ff, #3edbf0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative",
  },

  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "20px",
    width: "650px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    color: "white",
    position: "relative",
    zIndex: 1,
  },

  timer: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "20px",
    textAlign: "right",
  },

  question: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  option: {
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.25)",
    cursor: "pointer",
    fontSize: "18px",
    transition: "0.2s",
    display: "flex",
    alignItems: "center",
  },

  selectedOption: {
    background: "#3edbf0",
    color: "white",
    fontWeight: "700",
  },

  btn: {
    background: "#3edbf0",
    padding: "15px",
    borderRadius: "10px",
    color: "white",
    border: "none",
    fontSize: "22px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "20px",
    width: "100%",
    boxShadow: "0 5px 15px rgba(62,219,240,0.5)",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  popup: {
    background: "white",
    width: "380px",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  },

  popupTitle: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#6c63ff",
    marginBottom: "10px",
  },

  popupScore: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#3edbf0",
    marginBottom: "20px",
  },

  popupBtn: {
    background: "#6c63ff",
    padding: "12px 25px",
    borderRadius: "10px",
    color: "white",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
};
// -------------------------------------------


const TakeExam = () => {
  const { examId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Load questions for that exam
  useEffect(() => {
    setQuestions(questionBank[examId]);
  }, [examId]);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      finishExam();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);


  const finishExam = () => {
    setShowPopup(true);
  };


  const nextQuestion = () => {
    if (selected === questions[index].ans) {
      setScore(score + 1);
    }

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected("");
    } else {
      finishExam();
    }
  };


  if (questions.length === 0) return <h2>Loading...</h2>;


  return (
    <div style={styles.page}>

      {/* Popup */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2 style={styles.popupTitle}>🎉 Exam Completed Successfully!</h2>
            <p style={styles.popupScore}>
              You Scored: <b>{score}</b> / {questions.length}
            </p>
            <button
              style={styles.popupBtn}
              onClick={() => (window.location.href = "/")}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Main Question Card */}
      <div style={styles.card}>
        <div style={styles.timer}>⏳ Time Left: {timeLeft}s</div>

        <h2 style={styles.question}>
          Question {index + 1}: {questions[index].q}
        </h2>

        {questions[index].options.map((opt) => (
          <div
            key={opt}
            style={{
              ...styles.option,
              ...(selected === opt ? styles.selectedOption : {}),
            }}
            onClick={() => setSelected(opt)}
          >
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              style={{ marginRight: "10px" }}
            />
            {opt}
          </div>
        ))}

        <button style={styles.btn} onClick={nextQuestion} disabled={!selected}>
          {index === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TakeExam;
