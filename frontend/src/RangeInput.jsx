import {Card, Form} from "react-bootstrap";
import './App.css'

const RangeInput = ({ category, value, onChange, min, max }) => {
	return (
		<Card style={{border: "1px solid"}} className={"m-3"}>
			<Card.Body>
				<h3>{category}</h3>
				<div> {`Entered ${value} kg`} </div>
				<Form.Range
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
