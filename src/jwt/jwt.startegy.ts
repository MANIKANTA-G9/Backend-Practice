import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // get token from header
      ignoreExpiration: false,
      secretOrKey: 'super-secret-key',
      secretOrPrivateKey: 'secret'
    });
  }

  async validate(payload: any) {
    // Automatically attached to req.user
    return { username: payload.username, role: payload.role };
  }
}
