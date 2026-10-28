import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateHashTagDto } from './dto/createHashtag.dto';
import { HashTag } from './hashtag.entity';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(HashTag)
    private readonly hashtagRepository: Repository<HashTag>,
  ) {}

  public async getAllHashTags() {
    return await this.hashtagRepository.find();
  }
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
  public async softDeleteHashTag(id: number) {
    return await this.hashtagRepository.softDelete({ id });
  }
}
