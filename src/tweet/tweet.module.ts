import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.enity';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UserModule, TypeOrmModule.forFeature([Tweet])],
})
export class TweetModule {}
