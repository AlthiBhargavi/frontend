import React, { useState } from "react";
import axios from "axios";

const AddQuestion = () => {
  const [examId, setExamId] = useState("");
  const [question, setQuestion] = useState("");
  const [optA, setOptA] = useState("");
  const [optB, setOptB] = useState("");
  const [optC, setOptC] = useState("");
  const [optD, setOptD] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAddQuestion = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/admin/add-question", {
        examId,
        question,
        options: { A: optA, B: optB, C: optC, D: optD },
        answer,
      });

      alert("Question Added!");
    } catch (error) {
      alert("Failed to add question!");
    }
  };

  return (
    <div style={{ width: "500px", margin: "60px auto" }}>
      <h2>Add Question</h2>

      <form onSubmit={handleAddQuestion}>
        <label>Exam ID</label>
        <input
          type="number"
          placeholder="Enter Exam ID"
          value={examId}
          onChange={(e) => setExamId(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Question</label>
        <textarea
          placeholder="Question Text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Option A</label>
        <input
          type="text"
          value={optA}
          onChange={(e) => setOptA(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Option B</label>
        <input
          type="text"
          value={optB}
          onChange={(e) => setOptB(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Option C</label>
        <input
          type="text"
          value={optC}
          onChange={(e) => setOptC(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Option D</label>
        <input
          type="text"
          value={optD}
          onChange={(e) => setOptD(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <label>Correct Answer (A/B/C/D)</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button style={{ width: "100%", padding: "12px" }}>
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
