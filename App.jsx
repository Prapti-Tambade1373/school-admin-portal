import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import PrincipalDashboard from './PrincipalDashboard';
import TeacherDashboard from './TeacherDashboard';
import EmployeeDashboard from './EmployeeDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/principal" element={<PrincipalDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
