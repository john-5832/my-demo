import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Function to generate a random token
const generateToken = () => {
  return 'token-' + Math.random().toString(36).substr(2, 10);
};

const Postmethod = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleRegistration = async (data) => {
    setLoading(true);
    setApiError(null);
    setResponseData(null);

    // Check if the credentials match predefined ones
    const predefinedEmail = 'mailto:eve.holt@reqres.in';
    const predefinedPassword = 'pistol';

    if (data.email === predefinedEmail && data.password === predefinedPassword) {
      try {
        const response = await fetch('https://reqres.in/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }

        const responseData = await response.json();
        console.log('Response Data:', responseData);
        setResponseData(responseData);
      } catch (error) {
        setApiError(`Registration failed. Please try again. Error: ${error.message}`);
        console.error('Error:', error);
      }
    } else {
      // Simulate a success response with a unique ID and token
      const simulatedResponse = {
        id: Math.floor(Math.random() * 1000),
        token: generateToken()  // Generate a new token for each submission
      };
      console.log('Simulated Response Data:', simulatedResponse);
      setResponseData(simulatedResponse);
    }

    setLoading(false);
    reset();
  };

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters"
      }
    },
  };

  return (
    <div className="container">
      <div className="title">Registration</div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="user-details">
          <Row>
            <Col xs={12} md={6}>
              <div>
                <label className="details">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`input ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                  {...register('email', registerOptions.email)} /><br />
                <div className="text-danger">
                  {errors?.email && errors.email.message}
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <div>
                <label className="details">Password</label>
                <input
                  type="password"
                  name="password"
                  className={`input ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter your password"
                  {...register('password', registerOptions.password)} /><br />
                <div className="text-danger">
                  {errors?.password && errors.password.message}
                </div>
              </div>
            </Col>
          </Row>
          <br />
        </div>
        {apiError && <div className="text-danger">{apiError}</div>}
        {responseData && (
          <div className="text-success">
            Registration successful!
            <br />
            ID: {responseData.id}
            <br />
            Token: {responseData.token}
          </div>
        )}
        <button className="button" type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Postmethod;
