<<<<<<< HEAD
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
=======
import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';
>>>>>>> 29fcd0b23721218fe9b75d09db625652744b00f3

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
<<<<<<< HEAD

  @Post()
  public createTweet(@Body() payload: CreateTweetDto) {
    return this.tweetService.createTweet(payload);
  }

  @Patch()
  async updateTweet(@Body() payload: UpdateTweetDto) {
    this.tweetService.updateTweet(payload);
  }

  @Delete(':id')
  async deleteTweet(@Param('id', ParseIntPipe) id: number) {
    this.tweetService.deleteTweet(id);
  }
=======
>>>>>>> 29fcd0b23721218fe9b75d09db625652744b00f3
}
