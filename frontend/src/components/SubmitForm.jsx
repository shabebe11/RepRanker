import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from "react-bootstrap";
import RangeCollection from "./RangeCollection";
import "../styles/SubmitForm.css";

const SubmitForm = () => {
  const [sex, setSex] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [newWeight, setNewWeight] = useState(0);

  const [showBench, setShowBench] = useState(false);
  const [showSquat, setShowSquat] = useState(false);
  const [showDeadlift, setShowDeadlift] = useState(false);

  const [newBench, setNewBench] = useState(0);
  const [newSquat, setNewSquat] = useState(0);
  const [newDeadlift, setNewDeadlift] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(true);
  const [submittedPerson, setSubmittedPerson] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault()

    //Remove form and specify ranking of user
    setIsSubmitted(!isSubmitted)

    const personToSubmit = {
      nickname: newNickname,
      sex: sex,
      weight: newWeight,
      bench: newBench,
      squat: newSquat,
      deadlift: newDeadlift
    };

    setSubmittedPerson(personToSubmit)

    // axios.post('http://localhost:8080/api/users/submit', personToSubmit);

    // Reset form
    setSex('');
    setNewNickname('');
    setNewWeight(0);
    setNewBench(0);
    setNewSquat(0);
    setNewDeadlift(0);
  };

  if (isSubmitted) {
    return(
        <div style={{border: "1px solid red"}} >

        </div>
    )
  } else {
    return (
        <div className="submit-form-container">
          <h1>!! Find Your Rank !!</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h2><Form.Label>Nickname</Form.Label></h2>
              <Form.Control
                  placeholder="Enter a name"
                  value={newNickname}
                  onChange={(e) => setNewNickname(e.target.value)}
              />
            </div>

            <div className="form-section">
              <h2><Form.Label>Your Weight</Form.Label></h2>
              <Form.Control
                  type="number"
                  placeholder="Enter a number"
                  value={newWeight}
                  onChange={(e) => setNewWeight(e.target.value)}
              />
            </div>

            <div className="form-section">
              <h2><Form.Label>Sex</Form.Label></h2>
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
              <h2><Form.Label>Preferred Lifts</Form.Label></h2>
              <div className="checkbox-group">
                <Form.Check
                    type="checkbox"
                    label="Bench"
                    checked={showBench}
                    onChange={(e) => setShowBench(!showBench)}
                />
                <Form.Check
                    type="checkbox"
                    label="Squat"
                    checked={showSquat}
                    onChange={(e) => setShowSquat(!showSquat)}
                />
                <Form.Check
                    type="checkbox"
                    label="Deadlift"
                    checked={showDeadlift}
                    onChange={(e) => setShowDeadlift(!showDeadlift)}
                />
              </div>
            </div>

            <RangeCollection
                showBench={showBench}
                showSquat={showSquat}
                showDeadlift={showDeadlift}
                newBench={newBench}
                setNewBench={setNewBench}
                newSquat={newSquat}
                setNewSquat={setNewSquat}
                newDeadlift={newDeadlift}
                setNewDeadlift={setNewDeadlift}
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>
    );
  }

};

export default SubmitForm;