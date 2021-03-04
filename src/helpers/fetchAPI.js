const hostApiUrl = process.env.REACT_APP_API_URL;

export const fetchSinToken = (endpoint, data, method = 'GET') => {
	const url = `${hostApiUrl}${endpoint}`;

	if (method === 'GET') {
		return fetch(url);
	} else {
		return fetch(url, {
			method: method,
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	}
};

export const fetchConToken = (endpoint, data, method = 'GET') => {
	const url = `${hostApiUrl}${endpoint}`;
	const token = localStorage.getItem('token') || '';

	if (method === 'GET') {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
				'x-token': token,
			},
		});
	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
				'x-token': token,
			},
			body: JSON.stringify(data),
		});
	}
};
