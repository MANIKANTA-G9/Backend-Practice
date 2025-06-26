// import { Injectable } from "@nestjs/common";

// @Injectable()
// export class UserService {
//   newlogin(): string {
//     return "Login";
//   }
// }

import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async register(CreateUserDto:CreateUserDto) {
    const existing = await this.UserModel.findOne({
      $or: [{ username:CreateUserDto.username }, { email:CreateUserDto.email }],
    });
    if (existing) throw new ConflictException('Username or Email already exists');

    const user = new this.UserModel(CreateUserDto);
    return user.save();
  }

  async login(loginDto: LoginDto) {
    const user = await this.UserModel.findOne({ username: loginDto.username });
    if (!user || !(loginDto.password === user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return { message: 'Login successful', user };
  }

  async getAllUsers() {
    return this.UserModel.find();
  }
}
