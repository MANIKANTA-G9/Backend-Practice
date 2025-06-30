import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.services";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/models/user/user.schema";
import { Model } from "mongoose";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(body.username, body.password);
    // if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.authService.login(user);
// return user;
  }
}
