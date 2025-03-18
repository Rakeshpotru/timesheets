import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/authService';

function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await loginUser({ email, password });
    if (response.success) {
      navigate('/dashboard');  // Redirect to dashboard on successful login
    } else {
      setError('Invalid credentials. Would you like to register?');
    }
  };

  const handleRegister = async () => {
    // const email = prompt("Please enter your email:");
    navigate('/register'); 
    // const response = await registerUser({ email, password, email });

    // if (response.success) {
    //   alert('Registration successful, you can now login.');
    //   setError('');
    // } else {
    //   setError('Registration failed. Please try again.');
    // }
  };

  return (
    <div>
      <h2>Employee Login</h2>
      <input 
        type="text" 
        placeholder="email" 
        value={email} 
        onChange={(e) => setemail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Login;
