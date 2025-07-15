import {Col, Row} from "react-bootstrap";
import RangeInput from "../RangeInput";

const RangeCollection = ({ showBench, showSquat, showDeadlift, newBench,
                             setNewBench, newSquat, setNewSquat, newDeadlift, setNewDeadlift}) => {

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
            {showBench && (
                <Row>
                    <Col className={"p-0"}>
                        <RangeInput
                            category={"Bench"}
                            value={newBench}
                            onChange={handleBench}
                            min={5}
                            max={600}
                        />
                    </Col>
                </Row>
            )}
            {showSquat && (
                <Row>
                    <Col className={"p-0"}>
                        <RangeInput
                            category={"Squat"}
                            value={newSquat}
                            onChange={handleSquat}
                            min={5}
                            max={600}
                        />
                    </Col>
                </Row>
            )}
            {showDeadlift && (
                <Row>
                    <Col className={"p-0"}>
                        <RangeInput
                            category={"Deadlift"}
                            value={newDeadlift}
                            onChange={handleDeadlift}
                            min={5}
                            max={600}
                        />
                    </Col>
                </Row>
            )}
        </>
    )
}

export default RangeCollection