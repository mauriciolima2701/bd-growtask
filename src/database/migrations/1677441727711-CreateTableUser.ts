import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from "typeorm";

export class CreateTableUser1677441727711 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "user",
				columns: [
					{
						name: "id_user",
						type: "varchar",
						isPrimary: true,
						isNullable: false,
					},
					{
						name: "id_task",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "name",
						type: "varchar",
						isNullable: false,
					},
					{
						name: "email",
						type: "varchar",
						isUnique: true,
						isNullable: false,
					},
					{
						name: "password",
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
				foreignKeys: [
					new TableForeignKey({
						name: "fk_user_task",
						columnNames: ["id_task"],
						referencedTableName: "task",
						referencedColumnNames: ["id"],
					}),
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("user");
	}
}
