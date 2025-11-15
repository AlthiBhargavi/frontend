import { useState, useEffect } from "react";
import { API } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

function AttemptExam() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    API.get(`/exams/${id}`).then((res) => setQuestions(res.data.questions));
  }, [id]);

  const submitExam = async () => {
    await API.post(`/exams/${id}/submit`, { answers });
    navigate(`/result/${id}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Attempt Exam</h2>

      {questions.map((q) => (
        <div key={q.id}>
          <h3>{q.question}</h3>
          <input 
            type="text"
            onChange={(e) =>
              setAnswers({ ...answers, [q.id]: e.target.value })
            }
          />
          <hr />
        </div>
      ))}

      <button onClick={submitExam}>Submit</button>
    </div>
  );
}

export default AttemptExam;
