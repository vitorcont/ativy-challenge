const localStorage = window.localStorage;

const StorageService = {
	getItem: (key: string) => {
		const authCache = localStorage.getItem(key);

		if (authCache && authCache !== "undefined") {
			return JSON.parse(authCache);
		}
	},
	setItem: (key: string, data: unknown) => {
		localStorage.setItem(key, JSON.stringify(data));
	},
	removeItem: (key: string) => {
		localStorage.removeItem(key);
	},
	clear: () => {
		localStorage.clear();
	},
};

export default StorageService;
