import { compare } from "../utils/hash.cjs";
import tokenVerifier from "jsonwebtoken";
import { config } from "dotenv";
config();
// import User from "../../services/user.js";
// import { sendRecoveryMail } from "../../utils/mail";
// import { hash } from "bcryptjs";
import UserService from "./user.js";

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

	// passwordRecovery: async () => {
	// 	const result = await tabela.find(this.email);
	// 	if (result) {
	// 		var arr = [];
	// 		while (arr.length < 5) {
	// 			var r = Math.floor(Math.random() * 100) + 1;
	// 			if (arr.indexOf(r) === -1) arr.push(r);
	// 		}
	// 		const newPassword = arr.join("");
	// 		const hashedPassword = await hash(newPassword, 8);
	// 		tabela.update(result.id, { password: hashedPassword });
	// 		await sendRecoveryMail(newPassword, result.email);
	// 	} else {
	// 		throw new Error("ERROR");
	// 	}
	// },
};

export default AuthService;
