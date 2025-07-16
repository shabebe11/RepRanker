import React, {useState} from 'react';
import '../styles/Leaderboard.css';
import axios from "axios";
import {Button, Form, Table} from "react-bootstrap";

const Leaderboard = () => {
    const [lift, setLift] = useState('')
    const [sex, setSex] = useState('')
    const [weight, setWeight] = useState('')

    const [leaderboard, setLeaderboard] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        event.preventDefault()
        setIsSubmitted(true)
        axios.get('http://reprankedbackend-env.eba-mcbgdgvt.ap-southeast-2.elasticbeanstalk.com/api/users/leaderboard',
            {
                params:
                    {
                        lift: lift,
                        sex: sex,
                        weight: weight !== '' ? weight : null
                    }
            }).then((response) => {
                setLeaderboard(response.data)
            }
        )
    }

    if (isSubmitted) {
        return (
            <div className="leaderboard-results">
                <h2 className="text-center mb-4">
                    Top 10 {sex} {lift} {weight !== '' ? `at ${weight}kg` : ''}
                </h2>
                
                {leaderboard.length > 0 ? (
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Nickname</th>
                                <th>Weight (kg)</th>
                                <th>{lift.charAt(0).toUpperCase() + lift.slice(1)} (kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((user, index) => (
                                <tr key={user.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.weight}</td>
                                    <td>{user[lift]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p className="text-center">No results found for these criteria.</p>
                )}
                
                <div className="text-center mt-4">
                    <Button variant="secondary" onClick={() => {
                        setLift('');
                        setSex('');
                        setWeight('');
                        setLeaderboard([]);
                        setIsSubmitted(false);
                    }}>
                        New Search
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="submit-form-container">
        <h1 className="text-center"> Top 10 Leaderboard</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-section">
                <h2 className={"mt-3"}><Form.Label>Sex</Form.Label></h2>
                <div className="radio-group">
                    <Form.Check
                        type="radio"
                        label="Male"
                        checked={sex === "male"}
                        onChange={(e) => setSex("male")}
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        checked={sex === "female"}
                        onChange={(e) => setSex("female")}
                    />
                </div>
            </div>
            <div className="form-section">
                <h2><Form.Label>Lift</Form.Label></h2>
                <div className="radio-group">
                    <Form.Check
                        type="radio"
                        label="Bench"
                        checked={lift === "bench"}
                        onChange={(e) => setLift("bench")}
                    />
                    <Form.Check
                        type="radio"
                        label="Squat"
                        checked={lift === "squat"}
                        onChange={(e) => setLift("squat")}
                        />
                        <Form.Check
                            type="radio"
                            label="Deadlift"
                            checked={lift === "deadlift"}
                            onChange={(e) => setLift("deadlift")}
                        />
                    </div>
                </div>
                <div className="form-section">
                    <h2><Form.Label> Weight </Form.Label></h2>
                    <Form.Control
                        type="number"
                        placeholder="Enter a number (Optional)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
            <div className="form-section">
                <Button type="submit"> Submit </Button>
            </div>
        </form>


    </div>
  );
};

export default Leaderboard;