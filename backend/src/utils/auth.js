export const getToken = (req) => {
	const authToken = req.headers.authorization;

	if (!authToken) {
		throw Error("invalid credentials");
	}
	const token = authToken.split(" ")[1];

	return token;
};
