import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHashTagDto {
  @IsNotEmpty({ message: 'Hashtag name is required' })
  @IsString({ message: 'Hashtag name must be a string' })
  name!: string;
}
