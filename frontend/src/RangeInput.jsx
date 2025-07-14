import {Card, Form} from "react-bootstrap";
import './App.css'

const RangeInput = ({ value, onChange, category, min, max }) => {
	return (
		<Card style={{border: "1px solid"}} className={"m-2"}>
			<Card.Body>
				<Form.Label> {category} </Form.Label>
				<div>{value ? `Entered ${value} kg` : 0}</div>
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
