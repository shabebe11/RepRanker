import {Card, Form} from "react-bootstrap";
import '../styles/App.css'
import '../styles/SubmitForm.css'

const RangeInput = ({ category, value, onChange, min, max }) => {
	return (
		<Card className={"m-3 custom-card"}>
			<Card.Body>
				<h3>{category}</h3>
				<div className={"text-white"}> {`Entered ${value} kg`} </div>
				<Form.Range
					className={"custom-range"}
					min={min}
					max={max}
					step={5}
					value={value}
					onChange={e=>{
						onChange(e)
					}}

				/>
			</Card.Body>
		</Card>
	)
}

export default RangeInput
