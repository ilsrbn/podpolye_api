import { PostModel } from '../Post/Post.model';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

@Entity()
export class AccountModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 30 })
  username: string;

  @Column({ select: false })
  password: string

  @OneToMany(() => PostModel, (post) => post.owner)
  posts: PostModel[];
}
