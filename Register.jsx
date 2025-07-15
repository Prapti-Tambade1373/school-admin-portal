import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [user, setUser] = useState({ username: '', password: '', role: '' });

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8082/api/auth/register', user);
      alert("Registered successfully!");
    } catch {
      alert("Username already taken!");
    }
  };

  return (
    <div className="card p-4 shadow w-50 mx-auto ">
      <h3 className="text-center mb-3">Register</h3>
      <input className="form-control mb-3" placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input className="form-control mb-3" type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <select className="form-control mb-3" onChange={(e) => setUser({ ...user, role: e.target.value })}>
        <option value="">Select Role</option>
        <option value="Principal">Principal</option>
        <option value="Teacher">Teacher</option>
        <option value="Employee">Employee</option>
      </select>
      <button className="btn btn-success w-100" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
