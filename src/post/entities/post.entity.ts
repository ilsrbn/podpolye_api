import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  Index,
} from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import { Attachment } from 'src/attachment/entities/attachment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column({ type: 'varchar', length: 120, default: '' })
  title: string;

  @Index({ fulltext: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  event_date: string;

  @ManyToOne(() => Account, (owner) => owner.posts, { nullable: false })
  owner: Account;

  @Column({ nullable: false })
  ownerId: number;

  @OneToMany(() => Attachment, (attachment) => attachment.post, {
    cascade: ['remove'],
    eager: true,
  })
  @JoinColumn()
  attachments: Attachment[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'boolean', default: false })
  posted = false;
}
