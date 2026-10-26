import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet-dto';

// http://localhost:3000/tweet
@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}
  @Get()
  public GetTweets(
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,
  ) {
    return this.tweetService.getTweets(userId);
  }

  @Post()
  public createTweet(@Body() payload: CreateTweetDto) {
    return this.tweetService.createTweet(payload);
  }
}
