import { Profile } from 'src/profile/profile.entity';
import { Tweet } from 'src/tweet/tweet.enity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 24,
    unique: true,
  })
  username!: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
    unique: true,
  })
  email!: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 10,
  })
  gender!: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  password!: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    eager: true,
  })
  profile?: Profile;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;

  @OneToMany(() => Tweet, (tweet) => tweet.user, { eager: true })
  tweets!: Tweet[];
}
