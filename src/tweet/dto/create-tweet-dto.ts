import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString({ message: 'Text must be a string' })
  @IsNotEmpty({ message: 'Text is required' })
  text!: string;

  @IsString({ message: 'Image must be a string' })
  @IsOptional({ message: 'Image is optional' })
  image?: string;

  @IsInt({ message: 'User ID must be an integer' })
  @IsNotEmpty({ message: 'User ID is required' })
  userId!: number;
}
