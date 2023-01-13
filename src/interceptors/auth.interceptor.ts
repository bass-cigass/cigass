import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/components/auth /auth.service";
import { UsersService } from "src/components/users/users.service";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor( private authService: AuthService, private usersService: UsersService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;
    if (tokenArray) {
      req.body["user"] = this.authService.decodeToken(tokenArray.split(" ")[1]).user;
    }

    return next
      .handle()
      .pipe(
        // tap(() => console.log(``)),
      );
  }
}