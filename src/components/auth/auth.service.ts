import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, mdp: string): Promise<any> {
        const user = await this.usersService.findOne({ where: { email: email } });
        console.log(await bcrypt.hash(mdp, 10));
        if (user && bcrypt.compare(user.mdp, await bcrypt.hash(mdp, 10))) {
            const { mdp, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        // console.log(user.user);
        const payload = { 
            user : {
                id: user.user.id, 
                email: user.user.email, 
                nom: user.user.nom, 
                prenom: user.user.prenom,
                created_at: user.user.created_at, 
                updated_at: user.user.updated_at 
            }
        };
        // console.log({payload});
        return {
          access_token: this.jwtService.sign(payload),
        };
    
      }
    
        async register(data) {
            data.password = await bcrypt.hash(data.mdp, 10)
            let response = await this.usersService.create(data);
            if (response) {
                const { mdp, ...result } = response;
                return result;
            }
        }
    
      decodeToken(token) : any {
        return this.jwtService.decode(token)
      }

}
