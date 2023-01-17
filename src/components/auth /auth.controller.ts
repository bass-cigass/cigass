import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';
import { LocalAuthGuard } from './strategy/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    // // @UseGuards(JwtAuthGuard)
    // @Post('login')
    // async login(@Body() authLoginDto: AuthLoginDto) {
    //     return this.authService.login(authLoginDto);
    // }

    // @Post('register')
    // async register(@Request() req) {
    //     return this.authService.register(req);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Get('profile')
    // getProfile(@Request() req) {
    //     return req.user;
    // }

    @Post('login')
    async login(@Body() authLoginDto: AuthLoginDto) {
        console.log(authLoginDto);
      return await this.authService.login(authLoginDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get()
    async test() {
      return 'Success!';
    }
}
