import { Tweet } from 'src/tweet/tweet.enity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HashTag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  name!: string;

  @ManyToMany(() => Tweet, (tweet) => tweet.hashTags, { onDelete: 'CASCADE' })
  tweets?: Tweet[];
}
