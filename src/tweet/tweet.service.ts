import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.enity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet-dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  getTweets(userId?: number) {
    console.log(userId);
  }
  async createTweet(payload: CreateTweetDto) {
    const user = await this.userService.getUserById(payload.userId);

    if (!user) {
      throw new Error('User does not exist');
    }

    const tweet = this.tweetRepository.create({ ...payload, user });
    return await this.tweetRepository.save({ ...tweet });
  }
}
