import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Components
import Navbar from "./components/Navbar";

// 🔹 Student Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Exams from "./pages/Exams";
import ExamInstructions from "./pages/ExamInstructions";
import TakeExam from "./pages/TakeExam";
import Result from "./pages/Result";
import AboutUs from "./pages/AboutUs";

// 🔹 Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddExam from "./pages/admin/AddExam";
import AddQuestion from "./pages/admin/AddQuestion";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/exam-instructions/:examId" element={<ExamInstructions />} />
        <Route path="/take-exam/:examId" element={<TakeExam />} />
        <Route path="/result/:examId" element={<Result />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-exam" element={<AddExam />} />
        <Route path="/admin/add-question" element={<AddQuestion />} />
      </Routes>
    </Router>
  );
};

export default App; 