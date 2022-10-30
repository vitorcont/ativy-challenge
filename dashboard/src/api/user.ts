import getInstance from "./instance";

const UserApi = {
	getMe: async () => {
		const instance = await getInstance();
		const { data } = await instance.get("/user/me");

		return data;
	},
	getById: async (id: string) => {
		const instance = await getInstance();
		const { data } = await instance.get(`/user/${id}`);

		return data;
	},
	create: async (userData: models.User) => {
		const instance = await getInstance();
		await instance.post("/user", userData);
	},
};

export default UserApi;
