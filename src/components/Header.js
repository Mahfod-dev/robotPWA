import React from 'react'
import Counter from './Counter'

const Header = (props) => {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return false
	// }

	console.log('header')
	return (
		<>
			<Counter color={'red'} />
			<h1 className='f1'>RoboFriends</h1>
		</>
	)
}
// const test = (nextProps, nextState) => {
// 	console.log(nextProps.color, nextState)
// 	return nextProps.color != nextState.color
// }

export default React.memo(Header)
