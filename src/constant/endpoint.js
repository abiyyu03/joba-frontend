const baseUrl = import.meta.env.API_URL;

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
		create: `${baseUrl}/post`,
		getById(id) {
			return `${baseUrl}/post/${id}`;
		},
	},
	bookmark: {
		get(userId) {
			return `${baseUrl}/bookmarks/${userId}`;
		},
		create: `${baseUrl}/bookmarks`,
		delete(id) {
			return `${baseUrl}/bookmarks/${id}`;
		},
	},
	skill: {
		get: `${baseUrl}/skills`,
	},
	tag: {
		get: `${baseUrl}/tags`,
	},
};

export default ENDPOINT;
