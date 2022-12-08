import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { AccountModel } from "../Account/Account.model";
import { AttachmentModel } from '../Attachment/Attachment.model';

@Entity()
export class PostModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  title: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  event_date: string;

  @ManyToOne(() => AccountModel, (owner) => owner.posts, { onDelete: "CASCADE" })
  owner: AccountModel

  @OneToMany(() => AttachmentModel, (attachemnt) => attachemnt.post, { onDelete: "CASCADE" })
  attachments: AttachmentModel[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'boolean', default: true })
  posted: boolean = true;

}
