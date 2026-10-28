import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet-dto';
import { UpdateTweetDto } from './dto/update-tweet-dto';

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

  @Patch()
  async updateTweet(@Body() payload: UpdateTweetDto) {
    await this.tweetService.updateTweet(payload);
  }

  @Delete(':id')
  async deleteTweet(@Param('id', ParseIntPipe) id: number) {
    await this.tweetService.deleteTweet(id);
  }
}
