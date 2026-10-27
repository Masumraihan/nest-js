import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashTag } from './hashtag.entity';
import { In, Repository } from 'typeorm';
import { CreateHashTagDto } from './dto/createHashtag.dto';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(HashTag)
    private readonly hashtagRepository: Repository<HashTag>,
  ) {}

  public async createHashTag(payload: CreateHashTagDto) {
    const hashTag = this.hashtagRepository.create(payload);
    return await this.hashtagRepository.save(hashTag);
  }
  public async findHashTags(hashTags: number[]) {
    return await this.hashtagRepository.find({ where: { id: In(hashTags) } });
  }
  public async deleteHashTag(id: number) {
    return await this.hashtagRepository.delete({ id });
  }
}
