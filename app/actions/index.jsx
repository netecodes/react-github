import axios from 'axios';

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const GITHUB_URL = 'https://api.github.com/users';

export function successHandler(response) {
	return ({
		type: FETCH_SUCCESS,
		payload: response,
		fetched: true
	})
}

export function errorHandler(response) {
	return ({
		type: FETCH_ERROR,
		payload: response,
		fetched: true,
		error: "User Not Found"
	})
}

export function fetchRepos(username) {
	return function(dispatch) {
		axios.get(`${GITHUB_URL}/${username}/repos`)
			.then(response => { dispatch(successHandler(response)) })
			.catch(response => { dispatch(errorHandler(response)) })
			}
	}
