import "dotenv/config";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 8081;
const app = express();

app.use(express.json(), cors());

app.listen(port, () => console.log(`Server is running in port ${port}`));
