import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api"; // <-- Backend API

// -------------------------------------------
// ⭐ UI STYLES (same from your file)
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

const TakeExam = () => {
  const { examId } = useParams();
  const navigate = useNavigate();

  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(60);
  const [showPopup, setShowPopup] = useState(false);

  // -------------------------------------------
  // ⭐ Fetch exam questions from backend
  // -------------------------------------------
  useEffect(() => {
    const loadExam = async () => {
      try {
        const res = await API.get(`/exam/${examId}`);

        setExam(res.data);
        setQuestions(res.data.questions);
        setAnswers(new Array(res.data.questions.length).fill(null));
        setTimeLeft(res.data.duration * 60 || 60);
      } catch (err) {
        console.error(err);
        alert("Failed to load questions");
      }
    };

    loadExam();
  }, [examId]);

  // -------------------------------------------
  // ⭐ Timer logic
  // -------------------------------------------
  useEffect(() => {
    if (timeLeft <= 0) {
      finishExam();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // -------------------------------------------
  // ⭐ Finish Exam (Submit to backend)
  // -------------------------------------------
  const finishExam = async () => {
    try {
      const res = await API.post("/exam/submit", {
        examId,
        answers,
      });

      setScore(res.data.score);
      setShowPopup(true);
    } catch (err) {
      console.error(err);
      alert("Error submitting exam");
    }
  };

  // -------------------------------------------
  // ⭐ Next Question
  // -------------------------------------------
  const nextQuestion = () => {
    const updated = [...answers];
    updated[index] = selected;
    setAnswers(updated);

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      finishExam();
    }
  };

  if (!exam || questions.length === 0) return <h2>Loading...</h2>;

  return (
    <div style={styles.page}>
      {/* Score Popup */}
      {showPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2 style={styles.popupTitle}>🎉 Exam Completed!</h2>
            <p style={styles.popupScore}>
              You Scored: <b>{score}</b> / {questions.length}
            </p>
            <button
              style={styles.popupBtn}
              onClick={() => navigate("/exams")}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Main Exam Card */}
      <div style={styles.card}>
        <div style={styles.timer}>⏳ Time Left: {timeLeft}s</div>

        <h2 style={styles.question}>
          Question {index + 1}: {questions[index].question}
        </h2>

        {[questions[index].option1, questions[index].option2, questions[index].option3, questions[index].option4]
          .filter(Boolean)
          .map((opt, idx) => (
            <div
              key={idx}
              style={{
                ...styles.option,
                ...(selected === idx + 1 ? styles.selectedOption : {}),
              }}
              onClick={() => setSelected(idx + 1)}
            >
              <input
                type="radio"
                checked={selected === idx + 1}
                style={{ marginRight: "10px" }}
              />
              {opt}
            </div>
          ))}

        <button style={styles.btn} onClick={nextQuestion} disabled={selected === null}>
          {index === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TakeExam;
