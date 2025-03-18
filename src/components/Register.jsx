import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await registerUser({ username, password, email ,created_at:"03-08-2025"});
    if (response.success) {
      alert('Registration successful, you can now login.');
      navigate('/');  // Redirect to login page
    } else {
      alert(response.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
