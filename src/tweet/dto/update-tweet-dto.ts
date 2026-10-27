import { PartialType } from '@nestjs/swagger';
import { CreateTweetDto } from './create-tweet-dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTweetDto extends PartialType(CreateTweetDto) {
  @IsNotEmpty({ message: 'Tweet ID is required' })
  @IsInt({ message: 'Tweet ID must be an integer' })
  id!: number;
}
