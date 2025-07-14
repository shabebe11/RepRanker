const Input = ({ type, value, onChange, category }) => {
	return (
		<p>
			<label> {category} </label>
			<input
				type={type}
				value={value}
				onChange={onChange}
			/>
		</p>
	)
}

export default Input
