import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),],
  controllers: [AuthController],
  exports: [AuthService],

})
export class AuthModule {}
