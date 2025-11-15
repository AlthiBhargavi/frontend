import { useState, useEffect } from "react";
import { API } from "../services/api";
import { Link } from "react-router-dom";

function ExamList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    API.get("/exams").then((res) => setExams(res.data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Available Exams</h2>

      {exams.map((exam) => (
        <div key={exam.id}>
          <h3>{exam.title}</h3>
          <Link to={`/exam/${exam.id}`}>Start Exam</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ExamList;
