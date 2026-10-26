import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async getAllProfiles() {
    return await this.profileRepository.find({ relations: { user: true } });
  }
  async deleteProfile(id: number) {
    return await this.profileRepository.delete({ id });
  }
}
