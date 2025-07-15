import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8082/api/auth/login', { username, password });
      const userData = res.data;
      if (userData.includes("Principal")) navigate('/principal');
      else if (userData.includes("Teacher")) navigate('/teacher');
      else if (userData.includes("Employee")) navigate('/employee');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="card p-4 shadow w-50 mx-auto">
      <h3 className="text-center mb-3">Login</h3>
      <input className="form-control mb-3" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className="form-control mb-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
