import { PostModel } from '../Post/Post.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";

@Entity()
export class AttachmentModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_url: string

  @Column({ select: false })
  file: string

  @ManyToOne(() => PostModel, (post) => post.attachments, { onDelete: "CASCADE" })
  post: PostModel

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
