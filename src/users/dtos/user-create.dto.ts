import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'First name must be at least 3 characters long.' })
  @MaxLength(50, { message: 'First name must be at most 10 characters long.' })
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Last name must be at least 3 characters long.' })
  @MaxLength(50, { message: 'Last name must be at most 10 characters long.' })
  lastName!: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50, { message: 'Email must be at most 50 characters long.' })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password!: string;

  @IsString()
  @IsOptional()
  gender?: string;
}
