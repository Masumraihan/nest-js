import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashTag } from './hashtag.entity';
import { Repository } from 'typeorm';
import { CreateHashTagDto } from './dto/createHashtag.dto';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(HashTag)
    private readonly hashtagRepository: Repository<HashTag>,
  ) {}

  public async createHashTag(payload: CreateHashTagDto) {
    console.log(payload, 'payload');
    const hashTag = this.hashtagRepository.create(payload);
    return await this.hashtagRepository.save(hashTag);
  }
}
