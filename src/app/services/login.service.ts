import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // doRegistration(usr) {
  //   this.http.post<any>(`http://localhost:3000/users/createUser`,usr )
  // }

  // login
   authLogin(email: string, mdp: string) {
    return  this.http.post<any>(`http://localhost:3000/auth/login`, { email, mdp })
      .pipe(
        map(
          data => {
            if (data && data.token) {
                // store user details and jwt token in the local storage to keep the user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(data));
                
                localStorage.setItem('userId', data.user._id);

              }
              console.log("data content", data);

              return data;
          }
          // (res : any )=>{
          //   console.log(res);
          //   return res;
          // }
          )
          // data => {
          // console.log(data);
          // login successful if the response has jwt token
          // if (data && data) {
          //   // store user details and jwt token in the local storage to keep the user logged in between page refreshes
          //   localStorage.setItem('currentUser', JSON.stringify(data));
          //   localStorage.setItem('userId', data.user._id);
          // }
          
      );
  }

  // recover token localstorage
  getToken(): string {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser)
      return null
    return currentUser.token;
  }

  // modify token
  // setToken(token: string): void {
  //   let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //   currentUser.token = token;
  //   localStorage.setItem("currentUser", currentUser);
  // }

  // recover token expire Date
  // getTokenExpirationDate(token: string): Date {
  //   var decoded = jwt_decode<JwtPayload>(token);

  //   if (decoded.exp === undefined) return null;
  //   var date = new Date(0);

  //   date.setUTCSeconds(decoded.exp);

  //   return date;
  // }

  // check if token is expired
  // isTokenExpired(token?: string): boolean {
  //   if (!token) token = this.getToken();
  //   if (!token) return true;

  //   var date = this.getTokenExpirationDate(token);
  //   if (date === undefined) return false;

  //   return !(date.valueOf() > new Date().valueOf()); // false not expired
  // }

  // logout
  logout() {
    localStorage.removeItem('currentUser');
  }
}
