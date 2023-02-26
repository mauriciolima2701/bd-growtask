import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import { pgHelper } from "./database/pg-helper";

const port = process.env.PORT || 8081;
const app = express();

app.use(express.json(), cors(), routes);

pgHelper
	.connect()
	.then(() =>
		app.listen(port, () => console.log(`Server is running in port ${port}`))
	)
	.catch((err) => console.log(err));
