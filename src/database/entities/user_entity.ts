import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { TaskEntity } from "./task_entity";

@Entity({ name: "user" })
export class UserEntity {
	@PrimaryColumn({ name: "id_user" })
	id!: string;

	@Column({ name: "id_task" })
	taskID!: string;

	@Column()
	name!: string;

	@Column({ unique: true })
	email!: string;

	@Column()
	password!: string;

	@CreateDateColumn()
	created_at!: Date;

	@CreateDateColumn()
	updated_at?: Date;

	@OneToMany(() => TaskEntity, (fk_task) => fk_task.user)
	@JoinColumn({ name: "taskID", referencedColumnName: "id" })
	task?: TaskEntity[];

	@BeforeUpdate()
	beforeUpdate() {
		this.created_at = new Date();
	}

	@BeforeInsert()
	beforeInsert() {
		this.created_at = new Date();
	}

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
