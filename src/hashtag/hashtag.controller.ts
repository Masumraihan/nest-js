import { Body, Controller, Post } from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { CreateHashTagDto } from './dto/createHashtag.dto';

@Controller('hashtag')
export class HashtagController {
  constructor(private hashTagService: HashtagService) {}

  @Post()
  public async createHashTag(@Body() payload: CreateHashTagDto) {
    console.log(payload);
    return await this.hashTagService.createHashTag(payload);
  }
}
