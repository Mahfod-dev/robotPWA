import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import Header from '../components/Header'
import './App.css'
import { setSearchField, requestRobots } from '../Action'

class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		// searchfield: '',
	// 	}
	// }

	componentDidMount() {
		this.props.onRequestRobots()
	}

	// onSearchChange = (event) => {
	// 	this.setState({ searchfield: event.target.value })
	// }

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
