import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Index
} from "typeorm";
import { AccountModel } from "../Account/Account.model";
import { AttachmentModel } from '../Attachment/Attachment.model';

@Entity()
export class PostModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({ type: "varchar", length: 120 })
  title: string;

  @Column({ type: 'varchar', length: 120 })
  slug: string;

  @Index({ fulltext: true })
  @Column({ type: "text" })
  description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  event_date: string;

  @ManyToOne(() => AccountModel, (owner) => owner.posts)
  owner: AccountModel

  @OneToMany(() => AttachmentModel, (attachemnt) => attachemnt.post, { cascade: ["remove"], eager: true })
  @JoinColumn()
  attachments?: AttachmentModel[];

  @OneToOne(() => AttachmentModel, { nullable: true, eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  cover?: AttachmentModel

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'boolean', default: true })
  posted: boolean = true;

}
