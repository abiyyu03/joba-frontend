const baseUrl = 'https://backend-dot-ch2-pr610-joba.et.r.appspot.com';

const ENDPOINT = {
	auth: {
		login: `${baseUrl}/login`,
		register: `${baseUrl}/register`,
	},
	user: {
		get(id) {
			return `${baseUrl}/users/${id}`;
		},
		update(id) {
			return `${baseUrl}/users/${id}`;
		},
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
		getByUserId(idUser) {
			return `${baseUrl}/post/user/${idUser}`;
		},
		delete(id) {
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
