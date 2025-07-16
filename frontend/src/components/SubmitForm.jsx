import React, { useState } from 'react';
import axios from 'axios';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import RangeCollection from "./RangeCollection";
import "../styles/SubmitForm.css";
import "../styles/SubmitRank.css"
import bronzeRank from '../images/bronze-removebg-preview.png'
import silverRank from '../images/silver-removebg-preview.png'
import goldRank from '../images/gold-removebg-preview.png'
import platinumRank from '../images/platinum-removebg-preview.png'
import diamondRank  from '../images/diamond-removebg-preview.png'

const SubmitForm = ({ isSubmitted, setIsSubmitted }) => {
  const [sex, setSex] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [newWeight, setNewWeight] = useState(0);

  const [showBench, setShowBench] = useState(false);
  const [showSquat, setShowSquat] = useState(false);
  const [showDeadlift, setShowDeadlift] = useState(false);

  const [newBench, setNewBench] = useState(0);
  const [newSquat, setNewSquat] = useState(0);
  const [newDeadlift, setNewDeadlift] = useState(0);

  const [submittedPerson, setSubmittedPerson] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault()

    //Remove form and specify ranking of user
    setIsSubmitted(!isSubmitted)

    const personToSubmit = {
      nickname: newNickname,
      sex: sex,
      weight: newWeight,
      ...(showBench ? {bench: newBench} : {bench: 0}),
      ...(showSquat ? {squat: newSquat} : {squat: 0}),
      ...(showDeadlift ? {deadlift: newDeadlift} : {deadlift: 0})
    };

    axios.post('http://reprankedbackend-env.eba-mcbgdgvt.ap-southeast-2.elasticbeanstalk.com/api/users/submit', personToSubmit).then(
        response => {
          setSubmittedPerson(response.data)
        }
    )

    // Reset form
    setSex('');
    setNewNickname('');
    setNewWeight(0);
    setNewBench(0);
    setNewSquat(0);
    setNewDeadlift(0);
  };

  const handleSrc = (rank) => {
    if (rank === "bronze") {
      return bronzeRank
    } else if (rank === "silver") {
      return silverRank
    } else if (rank === "gold") {
      return goldRank
    } else if (rank === "platinum") {
      return platinumRank
    } else if (rank === "diamond") {
      return diamondRank
    } else if (rank === "untrained") {
      return ""
    }
  }

  const handleDelete = () => {
    if (window.confirm(`Delete your recent submission?`)) {
      axios.delete(`http://reprankedbackend-env.eba-mcbgdgvt.ap-southeast-2.elasticbeanstalk.com/api/users/delete/${submittedPerson.id}`)
      setIsSubmitted(!isSubmitted)
    }
  }

  if (isSubmitted) {
    return(
        <>
          <Row style={{marginTop: '100px'}} className={"p-3"}>
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src={handleSrc(submittedPerson.benchRank)} style ={
                  { width: 'auto', height: 'auto'}
                }
                />
                <Card.Body>
                  <Card.Title> <h1> Bench </h1> </Card.Title>
                  <Card.Text className={"mt-4"}> <h2> You are {submittedPerson.benchRank} in Bench </h2> </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src={handleSrc(submittedPerson.squatRank)} style ={
                  { width: 'auto', height: 'auto'}
                }/>
                <Card.Body>
                  <Card.Title> <h1> Squat </h1> </Card.Title>
                  <Card.Text className={"mt-4"}> <h2> You are {submittedPerson.squatRank} in Squat </h2> </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src={handleSrc(submittedPerson.deadliftRank)} style ={
                  { width: 'auto', height: 'auto'}
                }/>
                <Card.Body>
                  <Card.Title> <h1> Deadlift </h1> </Card.Title>
                  <Card.Text className={"mt-4"}> <h2> You are {submittedPerson.deadliftRank} in Deadlift </h2> </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Button onClick={handleDelete}> Delete your submission </Button>
        </>
    )
  } else {
    return (
        <div className="submit-form-container">
          <h1> Find Your Rank </h1>
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
              <h2><Form.Label> Lifts</Form.Label></h2>
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