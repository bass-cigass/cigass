import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'app/models/utilisateur';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get(`http://localhost:3000/utilisateur/listAll`)
    .pipe(
        map((res: any []) => {
            return res;
        })
    )
  }

  addUser(usr: Utilisateur): Observable <Utilisateur>{
    return this.http.post(`http://localhost:3000/utilisateur/create`, usr).pipe(
      map((res : any )=>{
        return res;
      })
    );
  }
}
