import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { LoginDto } from './dto/Login.dto';

@Controller('user')
export class UserController {
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    console.log('REGISTER:', createUserDto);
    return {
      message: 'User successfully registered',
      data: createUserDto,
    };
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log('LOGIN:', loginDto);
    return {
      message: 'User logged in successfully',
      data: loginDto,
    };
  }

  // @Get('login')
  // newLogin() {
  //   return {
  //     message: 'GET login route is working',
  //     status: 200,
  //   };
  // }

}
