const baseUrl = 'http://localhost:3000';

const ENDPOINT = {
	auth: {
		login: `${baseUrl}/login`,
		register: `${baseUrl}/register`,
	},
	search: {
		get(keyword) {
			return `${baseUrl}/search?q=${keyword}`;
		},
	},
	post: {
		get: `${baseUrl}/post`,
		getById(id) {
			return `${baseUrl}/post/${id}`;
		},
	},
	bookmark: {
		get: `${baseUrl}/bookmarks`,
		create: `${baseUrl}/bookmarks`,
	},
};

export default ENDPOINT;
