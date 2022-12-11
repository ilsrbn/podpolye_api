import { PostModel } from '../Post/Post.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne
} from "typeorm";

@Entity()
export class AttachmentModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_url: string

  @Column()
  file: string

  @ManyToOne(() => PostModel, (post) => post.attachments, { onDelete: "CASCADE", orphanedRowAction: 'delete' })
  @JoinColumn()
  post: PostModel

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


}
