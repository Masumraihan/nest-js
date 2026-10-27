import { CreateUserDto } from './user-create.dto';
import { PartialType } from '@nestjs/swagger';

//export class UpdateUserDto {
//  @IsNumber()
//  @IsOptional()
//  id!: number;

//  @IsString()
//  @IsOptional()
//  @MinLength(3)
//  name?: string;

//  @IsEmail()
//  @IsOptional()
//  email?: string;

//  @IsString()
//  @IsOptional()
//  gender?: string;

//  @IsBoolean()
//  @IsOptional()
//  isMarried!: boolean;
//}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
