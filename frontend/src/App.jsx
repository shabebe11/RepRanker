import { useState } from 'react'
import axios from 'axios'
import {Button, Col, Form, Row} from "react-bootstrap";
import RangeCollection from "./components/RangeCollection";
import './App.css'

const App = () => {
	const [sex, setSex] = useState('')
	const [newNickname, setNewNickname] = useState('')
	const [showWeight, setShowWeight] = useState(false)
	const [newWeight, setNewWeight] = useState(null)

	const [showScroller, setShowScroller] = useState('')
	const [showBench, setShowBench] = useState(false)
	const [showSquat, setShowSquat] = useState(false)
	const [showDeadlift, setShowDeadlift] = useState(false)

	const [newBench, setNewBench] = useState(5)
	const [newSquat, setNewSquat] = useState(5)
	const [newDeadlift, setNewDeadlift] = useState(5)

	const handleSubmit = (event) => {
		event.preventDefault()
		const submittedPerson = {
			nickname: newNickname,
			sex: sex,
			weight: newWeight,
			bench: showBench ? newBench : 0,
			squat: showDeadlift ? newSquat : 0,
			deadlift: showDeadlift ? newDeadlift : 0
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

	const handleScroller = (event) => {
		let chosenScroller = event.target.value
		setShowScroller(event.target.value)
		if (chosenScroller === "bench") {
			setShowBench(true)
			setShowSquat(false)
			setShowDeadlift(false)
		} else if (chosenScroller === "squat") {
			setShowBench(false)
			setShowSquat(true)
			setShowDeadlift(false)
		} else if (chosenScroller === "deadlift") {
			setShowDeadlift(true)
			setShowBench(false)
			setShowSquat(false)
		} else if (chosenScroller === '') {
			setShowBench(false)
			setShowSquat(false)
			setShowDeadlift(false)
		}
	}

	return (
		<div className={"p-3"}>
			<h1 className="text-center"> RepRanker</h1>
			<br/>
			<form onSubmit={handleSubmit}>
				<h2>
					<Form.Label> Nickname </Form.Label>
				</h2>
				<input className={"mb-3"} value={newNickname} onChange={handleNickname}/>
				<br/>
				<Form.Label><h2>Sex</h2></Form.Label>
				<Form.Select style={{border: '1px solid black'}}
							 value={sex}
							 onChange={handleSex}
				>
					<option value="">--Select--</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</Form.Select>
				<br/>
				<h2> Lift </h2>
				<Form.Select style={{border: '1px solid black'}} value={showScroller} onChange={handleScroller}>
					<option value="">--Select--</option>
					<option value="bench">Bench</option>
					<option value="squat">Squat</option>
					<option value="deadlift">Deadlift</option>
				</Form.Select>
				<RangeCollection showBench={showBench} showSquat={showSquat} showDeadlift={showDeadlift}
								 newBench={newBench} setNewBench={setNewBench}
								 newSquat={newSquat} setNewSquat={setNewSquat}
								 newDeadlift={newDeadlift} setNewDeadlift={setNewDeadlift}
				/>
				{showWeight && (
					<>
						<h2 className={"mt-4"}> Your weight: </h2>
						<input type="number" value={newWeight} onChange={handleWeight} className={"mb-3"}/>
					</>
				)}
				<br/>
				<Form.Check
					className={"mb-3"}
					type={"checkbox"}
					label={"Weighted Ranking"}
					onChange={(e) => setShowWeight(e.target.checked)} />
				<Button className={"mt-2"} type="submit"> Submit </Button>
			</form>
		</div>
	)
}

export default App
