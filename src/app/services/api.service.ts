import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from 'app/models/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient :HttpClient) { }

  API_SERVER = "http://localhost:3000";

  public readUser(){
    return this.httpClient.get<Utilisateur[]>(`http://localhost:3000/users/listAll`);
  }

  public readUserId(id: Number){
    return this.httpClient.get<Utilisateur>(`http://localhost:3000/utilisateur/${id}`)
  }

  public createUtilisateur(utilisateur:Utilisateur){
    return this.httpClient.post<Utilisateur>(`http://localhost:3000/utilisateur/create`, utilisateur);
  }

  public updateUtilisateur(utilisateur: Utilisateur){
    return this.httpClient.put<Utilisateur>(`http://localhost:3000/utilisateur/${utilisateur.id}/update`, utilisateur);
  }

  public deleteUtilisateur(id: number){
    return this.httpClient.delete(`http://localhost:3000/utilisateur/${id}/delete`);
  }


}
