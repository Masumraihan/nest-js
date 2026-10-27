import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateHashTagDto } from './dto/createHashtag.dto';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {
  constructor(private hashTagService: HashtagService) {}

  @Post()
  public async createHashTag(@Body() payload: CreateHashTagDto) {
    return await this.hashTagService.createHashTag(payload);
  }

  @Delete(':id')
  public async deleteHashTag(@Param('id', ParseIntPipe) id: number) {
    return await this.hashTagService.deleteHashTag(id);
  }
}
