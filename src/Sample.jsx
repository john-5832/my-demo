import React, { useState } from 'react';

const FormValidation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setAgeError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    // Username validation
    if (username.trim() === '') {
      setUsernameError('Username is required');
      valid = false;
    }

    // Password validation
    if (password.trim() === '') {
      setPasswordError('Password is required');
      valid = false;
    }

    // Age validation (example: numeric check)
    if (age.trim() === '') {
      setAgeError('Age is required');
      valid = false;
    } else if (isNaN(age)) {
      setAgeError('Age must be a number');
      valid = false;
    }

    // If all fields are valid, proceed with form submission
    if (valid) {
      console.log('Form submitted with:', username, password, age);
      // Reset form fields
      setUsername('');
      setPassword('');
      setAge('');
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
          <p style={{ color: 'red' }}>{usernameError}</p>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p style={{ color: 'red' }}>{passwordError}</p>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={handleAgeChange}
          />
          <p style={{ color: 'red' }}>{ageError}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;