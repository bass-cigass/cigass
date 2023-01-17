import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { User } from '../users/entities/user.entity';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async login(authLoginDto: AuthLoginDto) {
      const user = await this.validateUser(authLoginDto);
  
      const payload = {
        userId: user.id,
      };
  
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  
    async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
      const { email, mdp } = authLoginDto;
  
      const user = await this.usersService.findByEmail(email);
      // console.log(user);
      if ((await user?.validatePassword(mdp))) {
        // console.log(await user?.validatePassword(mdp))
        throw new UnauthorizedException();
      }
  
      return user;
    }

}
