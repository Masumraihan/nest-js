import {
  Body,
  Controller,
  Delete,
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
    return this.userService.getUserById(params);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Patch()
  updateUser(@Body() user: any) {
    console.log(user);
  }

  @Delete(':id')
  async hardDeleteUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return await this.userService.hardDeleteUser(id);
  }
}
