import React, { useState } from 'react';
import '../styles/Leaderboard.css';
import axios from "axios";
import { Button, Form, Table } from "react-bootstrap";

const Leaderboard = () => {
  const [lift, setLift] = useState('');
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    axios.get(
      'http://reprankedbackend-env.eba-mcbgdgvt.ap-southeast-2.elasticbeanstalk.com/api/users/leaderboard',
      { params: { lift, sex, weight: weight !== '' ? weight : null } }
    )
    .then(response => {
      setLeaderboard(response.data);
      setIsSubmitted(true);
    })
    .catch(error => {
      const msg = error.response?.data || 'An unexpected error occurred.';
      setErrorMessage(msg);
    });
  };

  if (isSubmitted) {
    return (
      <div className="leaderboard-results">
        <h2 className="results-title">
          Top 10 {sex} {lift} {weight !== '' ? `at ${weight}kg` : ''}
        </h2>

        <Table responsive className="results-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nickname</th>
              <th>Weight (kg)</th>
              <th>{lift.charAt(0).toUpperCase() + lift.slice(1)} (kg)</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => {
              const user = leaderboard[i];
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user ? user.name : '–'}</td>
                  <td>{user ? user.weight : '–'}</td>
                  <td>{user ? user[lift] : '–'}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <Button
          className="new-search-btn"
          onClick={() => {
            setLift('');
            setSex('');
            setWeight('');
            setLeaderboard([]);
            setErrorMessage('');   
            setIsSubmitted(false);
          }}
        >
          New Search
        </Button>
      </div>
    );
  }

  return (
    <div className="submit-form-container">
      <h1 className="text-center">Top 10 Lifters Leaderboard</h1>
      <form onSubmit={handleSubmit}>
        {/* Sex */}
        <div className="form-section">
          <h2><Form.Label>Sex</Form.Label></h2>
          <div className="radio-group">
            <Form.Check
              type="radio"
              label="Male"
              checked={sex === "male"}
              onChange={() => setSex("male")}
            />
            <Form.Check
              type="radio"
              label="Female"
              checked={sex === "female"}
              onChange={() => setSex("female")}
            />
          </div>
        </div>
        {/* Lift */}
        <div className="form-section">
          <h2><Form.Label>Lift</Form.Label></h2>
          <div className="radio-group">
            <Form.Check
              type="radio"
              label="Bench"
              checked={lift === "bench"}
              onChange={() => setLift("bench")}
            />
            <Form.Check
              type="radio"
              label="Squat"
              checked={lift === "squat"}
              onChange={() => setLift("squat")}
            />
            <Form.Check
              type="radio"
              label="Deadlift"
              checked={lift === "deadlift"}
              onChange={() => setLift("deadlift")}
            />
          </div>
        </div>
        {/* Optional weight */}
        <div className="form-section">
          <h2><Form.Label>Weight (optional)</Form.Label></h2>
          <Form.Control
            type="number"
            placeholder="Enter a number (Optional)"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        {/* Submit */}
        <div className="form-section">
          <Button type="submit">Submit</Button>
        </div>

        {/* Display error without switching page */}
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Leaderboard;
