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
        axios.get('http://localhost:8080/api/users/leaderboard',
            {
                params:
                    {
                        lift: lift,
                        sex: sex,
                        weight: weight ? weight : null
                    }
            }).then((response) => {
                setLeaderboard(response.data)
            }
        )
    }

    if (isSubmitted) {
        return (
            <div>
                <br/><br/><br/><br/>
                Under construction
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