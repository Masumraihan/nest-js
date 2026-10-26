import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender } from '../profile.entity';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'First name must be at least 3 characters long.' })
  @MaxLength(50, { message: 'First name must be at most 10 characters long.' })
  firstName?: string;

  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'Last name must be at least 3 characters long.' })
  @MaxLength(50, { message: 'Last name must be at most 10 characters long.' })
  lastName?: string;

  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'Bio must be at least 3 characters long.' })
  @MaxLength(200, { message: 'Bio must be at most 200 characters long.' })
  bio?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  profileImage?: string;
}
