import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { loginUser } from '../services/authService';

function Login ()  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

  const handleLogin = async () => {
    const response = await loginUser({ username, password });
    if (response.success) {
      history.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Employee Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
