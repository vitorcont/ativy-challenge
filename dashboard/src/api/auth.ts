import getInstance from "./instance";

const AuthApi = {
	login: async (params: models.AuthRequest) => {
		const instance = await getInstance();
		const { data } = await instance.post("/auth", params);

		return data;
	},
	recovery: async (email: string) => {
		const instance = await getInstance();
		await instance.post("/auth/recovery", { email });
	},
};

export default AuthApi;
