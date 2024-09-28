import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  perex: string;

  @Column('text')
  content: string;

  @Column()
  author: string;

  @CreateDateColumn()
  timestamp: Date;
}
