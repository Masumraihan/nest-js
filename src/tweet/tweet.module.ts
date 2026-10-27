import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.enity';
import { HashtagModule } from 'src/hashtag/hashtag.module';
=======
>>>>>>> 29fcd0b23721218fe9b75d09db625652744b00f3

@Module({
  controllers: [TweetController],
  providers: [TweetService],
<<<<<<< HEAD
  imports: [UserModule, HashtagModule, TypeOrmModule.forFeature([Tweet])],
=======
  imports: [UserModule],
>>>>>>> 29fcd0b23721218fe9b75d09db625652744b00f3
})
export class TweetModule {}
