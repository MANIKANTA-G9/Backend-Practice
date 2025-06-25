import {
  IsString,
  IsEmail,
  IsOptional,
  IsIn,
  IsPhoneNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString() username: string;

  @IsString() password: string;

  @IsEmail() email: string;

  @IsOptional()
  @IsPhoneNumber(null)
  phone?: string;

  @IsOptional()
  @IsIn(['user', 'admin'])
  role?: string;
}
