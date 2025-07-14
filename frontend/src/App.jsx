import { useState } from 'react'
import axios from 'axios'
import Input from './Input'

const App = () => {
	const [sex, setSex] = useState('')
	const [newNickname, setNewNickname] = useState('')
	const [newWeight, setNewWeight] = useState('')
	const [newBench, setNewBench] = useState('')
	const [newSquat, setNewSquat] = useState('')
	const [newDeadlift, setNewDeadlift] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		const submittedPerson = {
			nickname: newNickname,
			sex: sex,
			weight: newWeight,
			bench: newBench,
			squat: newSquat,
			deadlift: newDeadlift
		}

		axios.post('/api/users/submit', submittedPerson)

		setSex('')
		setNewNickname('')
		setNewWeight('')
		setNewBench('')
		setNewSquat('')
		setNewDeadlift('')
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

	const handleBench = (event) => {
		setNewBench(event.target.value)
	}

	const handleSquat = (event) => {
		setNewSquat(event.target.value)
	}

	const handleDeadlift = (event) => {
		setNewDeadlift(event.target.value)
	}

	return (
		<>
			<h1> User Form </h1>
			<form onSubmit={handleSubmit}>
				<Input
					category={'Nickname'}
					type={'text'}
					value={newNickname}
					onChange={handleNickname}
				/>
				<p>
					<label htmlFor="sex"> Sex </label>
					<select
						id="sex"
						value={sex}
						onChange={handleSex}
					>
						<option value="">--Select--</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</p>
				<Input
					category={'Weight'}
					type={'number'}
					value={newWeight}
					onChange={handleWeight}
				/>
				<Input
					category={'Bench'}
					type={'number'}
					value={newBench}
					onChange={handleBench}
				/>
				<Input
					category={'Squat'}
					type={'number'}
					value={newSquat}
					onChange={handleSquat}
				/>
				<Input
					category={'Deadlift'}
					type={'number'}
					value={newDeadlift}
					onChange={handleDeadlift}
				/>
				<button type="submit"> Submit </button>
			</form>
		</>
	)
}

export default App
