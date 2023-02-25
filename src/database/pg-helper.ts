import { DataSource } from "typeorm";
import { config } from "./ormconfig";

export const pgHelper = {
	client: null as unknown as DataSource,
};
