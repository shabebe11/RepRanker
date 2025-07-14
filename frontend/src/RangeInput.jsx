import {Card, Form} from "react-bootstrap";
import './App.css'

const RangeInput = ({ value, onChange, min, max }) => {
	return (
		<Card style={{border: "1px solid"}} className={"m-3"}>
			<Card.Body>
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
