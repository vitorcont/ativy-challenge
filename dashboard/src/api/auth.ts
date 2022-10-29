import getInstance from "./instance";

const AuthApi = {
	login: async (params: models.AuthRequest) => {
		const instance = await getInstance();
		const { data } = await instance.post("/auth", params);

		return data;
	},
};

export default AuthApi;
