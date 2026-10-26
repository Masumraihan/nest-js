import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50, { message: 'Email must be at most 50 characters long.' })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'Username must be at most 50 characters long.' })
  username!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password!: string;

  @IsOptional()
  profile?: CreateProfileDto;
}
