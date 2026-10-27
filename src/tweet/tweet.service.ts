import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.enity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet-dto';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { UpdateTweetDto } from './dto/update-tweet-dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UserService,
    private readonly hashTagService: HashtagService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  getTweets(userId?: number) {
    if (userId) {
      return this.tweetRepository.find({
        where: { user: { id: userId } },
        relations: { hashTags: true },
      });
    }
    return this.tweetRepository.find({ relations: { hashTags: true } });
  }
  async createTweet(payload: CreateTweetDto) {
    const user = await this.userService.getUserById(payload.userId);

    if (!user) {
      throw new Error('User does not exist');
    }

    const hashTags = await this.hashTagService.findHashTags(
      payload.hashTags ?? [],
    );

    const tweet = this.tweetRepository.create({ ...payload, user, hashTags });
    return await this.tweetRepository.save({ ...tweet });
  }
  async updateTweet(payload: UpdateTweetDto) {
    const { id, hashTags: hashTagIds, userId, ...updatedData } = payload;

    // find tweet
    const tweet = await this.tweetRepository.findOne({
      where: { id },
      relations: { hashTags: true },
    });

    if (!tweet) {
      throw new NotFoundException('Tweet does not exist');
    }
    Object.assign(tweet, updatedData);

    if (hashTagIds !== undefined) {
      tweet.hashTags = await this.hashTagService.findHashTags(hashTagIds);
    }
    console.log(tweet);
    // update tweet
    return await this.tweetRepository.save(tweet);
  }

  async deleteTweet(id: number) {
    await this.tweetRepository.delete({ id });
    return { deleted: true, id };
  }
}
