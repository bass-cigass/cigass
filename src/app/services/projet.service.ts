import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from 'app/models/projet';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get(`http://localhost:3000/projet/listAllProjet`)
    .pipe(
        map((res: any []) => {
            return res;
        })
    )
  }
  addProjet(prj: Projet): Observable <Projet>{
    return this.http.post(`http://localhost:3000/projet/create`, prj).pipe(
      map((res : any )=>{
        return res;
      })
    );
  }
}
