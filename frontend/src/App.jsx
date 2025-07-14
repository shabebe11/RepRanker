import { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './Input'
import './App.css';

const App = () => {

	useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


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

		axios.post('http://localhost:8080/api/users/submit', submittedPerson)

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
			<h1> RepRanker </h1>
			<form onSubmit={handleSubmit}>
				<Input
					category={'Nickname'}
					type={'text'}
					value={newNickname}
					onChange={handleNickname}
				/>
				<label>Sex</label>
  <div className="sex-buttons">
    <button
      type="button" // Prevents form submission
      className={`sex-button ${sex === 'male' ? 'active' : ''}`}
      onClick={() => setSex('male')}
    >
      Male
    </button>
    <button
      type="button"
      className={`sex-button ${sex === 'female' ? 'active' : ''}`}
      onClick={() => setSex('female')}
    >
      Female
    </button>
  </div>
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
