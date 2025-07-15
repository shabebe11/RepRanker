import React, { useState } from 'react'
import axios from 'axios'
import {Button, Col, Form, Row} from "react-bootstrap";
import RangeCollection from "./components/RangeCollection";
import './App.css'

const App = () => {
	const [sex, setSex] = useState('')
	const [newNickname, setNewNickname] = useState('')
	const [newWeight, setNewWeight] = useState(0)

	const [showScroller, setShowScroller] = useState('')
	const [showBench, setShowBench] = useState(false)
	const [showSquat, setShowSquat] = useState(false)
	const [showDeadlift, setShowDeadlift] = useState(false)

	const [newBench, setNewBench] = useState(0)
	const [newSquat, setNewSquat] = useState(0)
	const [newDeadlift, setNewDeadlift] = useState(0)

	const handleSubmit = (event) => {
		event.preventDefault()
		const submittedPerson = {
			nickname: newNickname,
			sex: sex,
			weight: newWeight,
			bench: newBench ,
			squat: newSquat  ,
			deadlift: newDeadlift
		}

		console.log(submittedPerson)

		axios.post('http://localhost:8080/api/users/submit', submittedPerson)

		setSex('')
		setNewNickname('')
		setNewWeight(0)
		setNewBench(5)
		setNewSquat(5)
		setNewDeadlift(5)
	}

	const handleSex = (event) => {
		setSex(event.target.value)
	}

	const handleNickname = (event) => {
		setNewNickname(event.target.value)
	}

	const handleWeight = (event) => {
		setNewWeight(event.target.value)
	}

	return (
		<div className={"p-3"}>
			<h1 className="text-center"> RepRanker</h1>
			<br/>
			<form onSubmit={handleSubmit}>
				<Row>
					<Col xs={12} md={5} lg={2}>
						<h2> <Form.Label> Nickname </Form.Label> </h2>
						<Form.Control style={{border: "1px solid black"}}
									  placeholder="Enter a name"
									  value={newNickname} onChange={handleNickname}/>
						<br/>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={5} lg={2}>
						<h2> <Form.Label> Your Weight </Form.Label></h2>
						<Form.Control style={{border: "1px solid black"}}
									  type="number"
									  placeholder="Enter a number"
									  value={newWeight}
									  onChange={handleWeight} />
					</Col>
				</Row>
				<br/>
				<h2> <Form.Label> Sex </Form.Label></h2>
				<div>
					<Form.Check
						inline
						type="radio"
						label="Male"
						checked={sex === "male"}
						onChange={(e) => setSex("male")} />
					<Form.Check
						inline
						type="radio"
						label="Female"
						checked={sex === "female"}
						onChange={(e) => setSex("female")} />
				</div>
				<br/>
				<Form.Group className="mb-3">
					<Form.Label> <h2> Preferred Lifts </h2></Form.Label>
					<div>
						<Form.Check
							inline
							type="checkbox"
							label="Bench"
							checked={showBench}
							onChange={(e) => setShowBench(!showBench)}
						/>
						<Form.Check
							inline
							type="checkbox"
							label="Squat"
							checked={showSquat}
							onChange={(e) => setShowSquat(!showSquat)}
						/>
						<Form.Check
							inline
							type="checkbox"
							label="Deadlift"
							checked={showDeadlift}
							onChange={(e) => setShowDeadlift(!showDeadlift)}
						/>
					</div>

				</Form.Group>

				<RangeCollection showBench={showBench} showSquat={showSquat} showDeadlift={showDeadlift}
								 newBench={newBench} setNewBench={setNewBench}
								 newSquat={newSquat} setNewSquat={setNewSquat}
								 newDeadlift={newDeadlift} setNewDeadlift={setNewDeadlift}
				/>
				<Button className={"mt-2"} type="submit"> Submit </Button>
			</form>
		</div>
	)
}

export default App
