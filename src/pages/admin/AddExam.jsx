import React, { useState } from "react";
import axios from "axios";

const AddExam = () => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleAddExam = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/admin/add-exam", {
        name,
        duration,
      });

      alert("Exam Added Successfully!");
      setName("");
      setDuration("");
    } catch (error) {
      alert("Error adding exam!");
    }
  };

  return (
    <div style={{ width: "400px", margin: "60px auto" }}>
      <h2>Add New Exam</h2>

      <form onSubmit={handleAddExam}>
        <label>Exam Name</label>
        <input
          type="text"
          placeholder="Enter Exam Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <label>Duration (minutes)</label>
        <input
          type="number"
          placeholder="Enter Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <button style={{ width: "100%", padding: "12px" }}>
          Add Exam
        </button>
      </form>
    </div>
  );
};

export default AddExam;
