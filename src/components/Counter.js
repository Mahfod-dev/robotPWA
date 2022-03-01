import React, { useState } from 'react'

const Counter = ({ color }) => {
	const [count, setCount] = useState(0)
	console.log('rendering')
	console.log(color)
	const handleCount = () => {
		setCount((count) => {
			return count + 1
		})
	}
	console.log('counterButton')
	return (
		<button color={color} onClick={handleCount}>
			Counter : {count}
		</button>
	)
}
const handleTest = (prevProps, nextProps) => {
	console.log(prevProps, nextProps)

	return true
}

export default React.memo(Counter, handleTest)
