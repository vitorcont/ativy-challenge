import "module-alias/register.js";
import express from "express";
import bodyParser from "body-parser";
import config from "config";
import userRouter from "./controllers/user.js";
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
// app.use("/types", typesRouter);
// app.use("/auth", authRouter);
// app.use("/report", reportRouter);

app.use((err, req, res, prox) => {
	res.status(400).json({ message: err.message });
});

app.listen(config.get("api.porta"), () => console.log("API RUNNING PORT 4547"));
