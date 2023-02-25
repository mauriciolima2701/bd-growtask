import "dotenv/config";
import { DataSourceOptions } from "typeorm/data-source";

export const config: DataSourceOptions = {
	type: "postgres",
	url: process.env.BASE_URL,
	synchronize: false,
	logging: false,
	entities: ["src/database/entities/*.ts"],
	migrations: ["src/database/migrations/*.ts"],
};
