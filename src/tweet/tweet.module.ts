import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.enity';
import { HashtagModule } from 'src/hashtag/hashtag.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UserModule, HashtagModule, TypeOrmModule.forFeature([Tweet])],
})
export class TweetModule {}
