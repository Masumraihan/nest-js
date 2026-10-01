import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { CreateUserDto } from './dtos/user-create.dto';
import { UpdateUserDto } from './dtos/user-update.dto';
import { UserService } from './users.service';

// http://localhost:3000/users
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    const result = await this.userService.getUsers();
    return result;
  }

  @Get(':id')
  getUserById(
    @Req() request: Request,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    params: number,
  ) {
    console.log(typeof params, params);
    return this.userService.getUserById();
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
  }
}
