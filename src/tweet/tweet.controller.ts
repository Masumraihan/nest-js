import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';

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
}
