
'use client'; 

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/myuser/login/', { username, password });
      router.push('/'); // Redirect after successful login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;

