import React, { useState } from 'react';
import { registerUser } from '../../../api/auth';

const UserRegistrationView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userData = { username, email, password };
      const response = await registerUser(userData);
      console.log('Registration successful!', response);
      // Add any success handling logic here, such as showing a success message or redirecting to another page
    } catch (error) {
      console.error('Registration failed!', error);
      // Add error handling logic here, such as displaying an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistrationView;
