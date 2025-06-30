// // import { Injectable } from "@nestjs/common";
// // import { JwtService } from "@nestjs/jwt";

// // @Injectable()
// // export class AuthService {
// //   constructor(private jwtService: JwtService) {}

// //   async validateUser(username: string, password: string) {
// //     // Fake login: replace with real DB check
// //     if (username === 'admin' && password === 'admin123') {
// //       return { username, role: 'admin' };
// //     } else if (username === 'user' && password === 'user123') {
// //       return { username, role: 'user' };
// //     }
// //     return null;
// //   }

// //   async login(user: any) {
// //     const payload = { username: user.username, role: user.role };
// //     const token = this.jwtService.sign(payload);
// //     return { access_token: token };
// //   }
// // }

// import { Injectable, UnauthorizedException } from '@nestjs/common'; // ✅ Import Injectable and UnauthorizedException
// import { JwtService } from '@nestjs/jwt'; // ✅ Import JwtService
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User, UserDocument } from 'src/models/user/user.schema';
// import { LoginDto } from 'src/user/dto/login.dto';

// @Injectable()
// export class AuthService {
//   constructor(private jwtService: JwtService, @InjectModel(User.name) private UserModel: Model<UserDocument>) {}

//   async validateUser(username: string, password: string, loginDto: LoginDto) {
//     // 🧪 Replace with real DB lookup
//     // if (username === 'admin' && password === 'admin123') {
//     //   return { username, role: 'admin' };
//     // } else if (username === 'user' && password === 'user123') {
//     //   return { username, role: 'user' };
//     // }
//     // return null;
//       const user = await this.UserModel.findOne({ username: loginDto.username });
//     if (!user || !(loginDto.password === user.password)) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     return user;
//   }

//   async login(user: any) {
//     const payload = { username: user.username, role: user.role };
//     const token = this.jwtService.sign(payload);
//     return { access_token: token };
//   }
// }

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async validateUser(username: string, password: string) {
    // Find the user in the database by username
    const user = await this.userModel.findOne({ username });
    // Check if user exists and password matches
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user; // If everything is okay, return the user object
  }

  async login(user: any) {
    // Payload is the data we want to include in the JWT
    const payload = { username: user.username, role: user.role };

    // Sign a JWT token using the payload
    const token = this.jwtService.sign(payload);

    // Return the token to the client
    return { access_token: token };
  }
}
