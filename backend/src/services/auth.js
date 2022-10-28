import { compare } from "../utils/hash.cjs";
import tokenVerifier from "jsonwebtoken";
import { config } from "dotenv";
import { hash } from "../utils/hash.cjs";
config();
import UserService from "./user.js";
import { sendRecoveryMail } from "../utils/mail.js";

const AuthService = {
	login: async (data) => {
		if (data.email === "" || data.password === "") {
			throw new Error("missing fields");
		}
		const result = await UserService.findByParam({ email: data.email });
		if (!result) {
			throw new Error("invalid credentials");
		}
		const passwordMatches = await compare(data.password, result.password);

		if (!passwordMatches) {
			throw new Error("invalid credentials");
		}
		const token = tokenVerifier.sign({}, process.env.JWT_TOKEN, {
			subject: result.id,
			expiresIn: "1d",
		});

		await UserService.updateToken(result.id, token);

		return token;
	},

	passwordRecovery: async (email) => {
		const result = await UserService.findByParam({ email });
		if (!result) {
			throw new Error("user not found");
		}
		var arr = [];
		while (arr.length < 5) {
			var r = Math.floor(Math.random() * 100) + 1;
			if (arr.indexOf(r) === -1) arr.push(r);
		}
		const newPassword = arr.join("");
		await UserService.update({ password: newPassword, id: result.id });
		await sendRecoveryMail(newPassword, result.email);
	},
};

export default AuthService;
