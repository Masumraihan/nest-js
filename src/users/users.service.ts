import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/user-create.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async getUsers() {
    const users = await this.userRepository.find({
      where: {},
    });
    return users;
  }
  async getUserById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  public async createUser(user: CreateUserDto) {
    // validate if a user exist with given email
    const existUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (existUser) {
      return { message: 'User already exist with this email' };
    }

    // create and save user
    const newUser = this.userRepository.create(user);

    const result = await this.userRepository.save(newUser);

    user.profile = user.profile ?? {};

    console.log(user.profile);
    // create and save profile
    const createdProfile = this.profileRepository.create({
      ...user.profile,
      user: result,
    });
    await this.profileRepository.save(createdProfile);

    return result;
  }
  public async updateUser() {}
  public async hardDeleteUser(userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      return { message: 'User does not exist' };
    }
    await this.userRepository.delete({ id: userId });

    // delete profile as well
    if (user.profile?.id) {
      await this.profileRepository.delete({ id: user.profile?.id });
    }
    return { deleted: true };
  }
}
