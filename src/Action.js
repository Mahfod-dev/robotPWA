import {
	CHANGE_SEARCH_FIELD,
	RESQUEST_ROBOTS_PENDING,
	RESQUEST_ROBOTS_SUCCESS,
	RESQUEST_ROBOTS_FAILED,
} from './Constants'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text,
})

export const requestRobots = () => (dispatch) => {
	dispatch({ type: RESQUEST_ROBOTS_PENDING })

	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => dispatch({ type: RESQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch((error) =>
			dispatch({ type: RESQUEST_ROBOTS_FAILED, payload: error })
		)
}
