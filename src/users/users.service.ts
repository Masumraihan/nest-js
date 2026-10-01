import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/user-create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers() {
    const users = await this.userRepository.find();
    return users;
  }
  getUserById() {}

  public async createUser(user: CreateUserDto) {
    console.log('here');
    // validate if a user exist with given email
    const existUser = await this.userRepository.findOne({
      where: { email: user.email },
    });
    console.log(existUser);

    if (existUser) {
      return { message: 'User already exist' };
    }

    const newUser = this.userRepository.create(user);

    const result = await this.userRepository.save(newUser);
    return result;
  }
}
