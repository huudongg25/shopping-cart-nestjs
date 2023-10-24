import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDTO {
  @MaxLength(50, {
    message: 'UserName is too long',
  })
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  fullName: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsInt()
  @IsNotEmpty()
  gender: string

  @IsNotEmpty()
  birthday: Date
}
