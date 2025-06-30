// import { Module } from '@nestjs/common';
// import { JwtModule, JwtSecretRequestType, JwtService } from '@nestjs/jwt';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.services';
// import { RolesGuard } from 'src/roles/roles.guard';
// import { JwtStrategy } from 'src/jwt/jwt.startegy';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from 'src/models/user/user.schema';

// @Module({
//   imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])  ,
//     JwtModule.register({
//       secret: 'super-secret-key', // Don't expose in real apps (use .env)
//       signOptions: { expiresIn: '1h' }, // Token expires in 1 hour
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy, RolesGuard, JwtService],
//   exports: [JwtService]
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.services';
import { RolesGuard } from 'src/roles/roles.guard';
import { JwtStrategy } from 'src/jwt/jwt.startegy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/models/user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    
    JwtModule.register({
      secret: 'super-secret-key', // ✅ Secret defined
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RolesGuard], // ✅ NO JwtService here
})
export class AuthModule {}
