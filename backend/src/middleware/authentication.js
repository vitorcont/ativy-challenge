import { config } from "dotenv";
config();
import tokenVerifier from "jsonwebtoken";

export const authenticateUser = (req, res, prox) => {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).json({ message: "unauthorized" });
	}
	const token = authToken.split(" ")[1];

	try {
		tokenVerifier.verify(token, process.env.JWT_TOKEN);

		return prox();
	} catch (err) {
		return res.status(401).json({ message: "unauthorized" });
	}
};
