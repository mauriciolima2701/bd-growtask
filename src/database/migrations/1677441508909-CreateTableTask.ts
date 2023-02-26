import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTask1677441508909 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "task",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
						isNullable: false,
					},
					{
						name: "status",
						type: "varchar",
						// default: "ativo",
						isNullable: false,
					},
					{
						name: "title",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "description",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "created_at",
						type: "timestamp",
						isNullable: false,
					},
					{
						name: "updated_at",
						type: "timestamp",
						isNullable: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("task");
	}
}
