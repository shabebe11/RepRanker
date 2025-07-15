import React from 'react';
import '../styles/Leaderboard.css';

const Leaderboard = () => {

    axios.post('http://localhost:8080/api/users/leaderboard', submittedPerson);

  return (
    <div className="p-3">
      <h1 className="text-center">Leaderboard</h1>
      <p>Leaderboard content will go here</p>
    </div>
  );
};

export default Leaderboard;