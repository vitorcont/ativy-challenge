import "module-alias/register.js";
import express from "express";
import bodyParser from "body-parser";
import userRouter from "./controllers/user.js";
import taskRouter from "./controllers/task.js";
import authRouter from "./controllers/auth.js";
import { config } from "dotenv";
config();
import cors from "cors";

const app = express();
app.use(bodyParser.json());

app.use((req, res, prox) => {
	let requestedType = req.header("Accept");

	if (requestedType === "*/*") {
		requestedType = "application/json";
	}

	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE",
	);
	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader("Access-Control-Allow-Headers", "*");

	prox();
});

app.use("/user", userRouter);
app.use("/task", taskRouter);
app.use("/auth", authRouter);

app.use((err, req, res, prox) => {
	res.status(400).json({ message: err.message });
});

app.listen(process.env.API_PORT, () =>
	console.log(`API RUNNING PORT ${process.env.API_PORT}`),
);
