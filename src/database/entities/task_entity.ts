import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from "typeorm";
import { status } from "../../interfaces/ITask";
import { v4 as uuid } from "uuid";
import { UserEntity } from "./user_entity";

@Entity({ name: "task" })
export class TaskEntity {
	@PrimaryColumn()
	id!: string;

	@Column({ type: "text", default: "ativo" })
	status!: status;

	@Column()
	title!: string;

	@Column()
	description!: string;

	@CreateDateColumn({ type: "timestamp" })
	created_at!: Date;

	@CreateDateColumn({ type: "timestamp" })
	updated_at!: Date;

	@ManyToOne(() => UserEntity, (fk_user) => fk_user.task)
	@JoinColumn({ name: "id", referencedColumnName: "taskID" })
	user!: UserEntity;

	@BeforeUpdate()
	beforeUpdate() {
		this.updated_at = new Date();
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
