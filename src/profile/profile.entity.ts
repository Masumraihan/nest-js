import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 50,
  })
  firstName!: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 50,
  })
  lastName!: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  dateOfBirth!: Date;

  @Column({
    type: 'text',
    nullable: true,
  })
  bio!: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.Male,
  })
  gender!: Gender;

  @Column({
    type: 'text',
    nullable: true,
  })
  profileImage!: string;

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  @JoinColumn()
  user!: User;
}
