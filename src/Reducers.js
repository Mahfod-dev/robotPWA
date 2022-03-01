import {
	CHANGE_SEARCH_FIELD,
	RESQUEST_ROBOTS_PENDING,
	RESQUEST_ROBOTS_SUCCESS,
	RESQUEST_ROBOTS_FAILED,
} from './Constants'

const initialStateSearch = {
	searchField: '',
}
//Object.assign({},state,searchField:action.payload)

export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchField: action.payload }

		default:
			return state
	}
}
const initialStateRobots = {
	isPending: false,
	robots: [],
	error: '',
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case RESQUEST_ROBOTS_PENDING:
			return { ...state, isPending: true }
		case RESQUEST_ROBOTS_SUCCESS:
			return { ...state, robots: action.payload, isPending: false }
		case RESQUEST_ROBOTS_FAILED:
			return { ...state, error: action.payload, isPending: false }

		default:
			return state
	}
}
