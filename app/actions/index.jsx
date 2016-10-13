import axios from 'axios';

const GITHUB_URL = 'https://api.github.com/users';

export function fetchRepos(username) {
	const url = `${GITHUB_URL}/${username}/repos`;
	const request = axios.get(url);

	return {
			type: 'FETCH_REPOS',
			payload: request
	};
}
