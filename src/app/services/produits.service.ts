import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from 'app/models/produit';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http : HttpClient) { }
  
  findAll(){
    return this.http.get(`http://localhost:3000/produits/listAllProducts`)
    .pipe(
        map((res: any []) => {
            return res;
        })
    )
  }

  addProduct(prd: Produit): Observable <Produit>{
    return this.http.post(`http://localhost:3000/produits/addProduct`, prd).pipe(
      map((res : any )=>{
        return res;
      })
    );
  }
}
