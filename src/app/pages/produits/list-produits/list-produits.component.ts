import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'app/models/produit';
import { ProduitsService } from 'app/services/produits.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.scss']
})
export class ListProduitsComponent implements OnInit {

  produits : any;
  prd = new Produit;
  dataSource !: Produit [];
  constructor(private produitService : ProduitsService , private activatedRoute : ActivatedRoute, private route : Router) { this.findAll(); }

  ngOnInit(): void {
  }

  findAll(){
    this.produitService.findAll().subscribe((res: any) => {
      this.produits = res;
      console.log(res);
    })
  
  }

  addProduit(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });


    swalWithBootstrapButtons.fire({
      title: 'Voulez-vous ajouter une banque?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      html:
      '<input id="swal-input1" type="text" class="swal2-input" placeholder="Ref">' +
      '<input id="swal-input2" type="text" class="swal2-input" placeholder="Libelle">'+
      '<input id="swal-input3" type="text" class="swal2-input" placeholder="Unite">'+
      '<input id="swal-input4" type="text" class="swal2-input" placeholder="Seuil">'+
      '<input id="swal-input5" type="date" class="swal2-input" placeholder="Date entréé">'+
      '<input id="swal-input6" type="number" class="swal2-input" placeholder="Quantite">'+
      '<input id="swal-input7" type="text" class="swal2-input" placeholder="Date expiration">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Oui, ajouter :)',
      cancelButtonText: 'Non, annuler :) ',
      reverseButtons: true,
      preConfirm: ()=>{
        const refPrd = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        const libellePrd = (<HTMLInputElement>document.getElementById('swal-input2')).value;
        const quantitePrd = (<HTMLInputElement>document.getElementById('swal-input3')).valueAsNumber;
        const unitePrd = (<HTMLInputElement>document.getElementById('swal-input4')).value;
        const  seuilPrd = (<HTMLInputElement>document.getElementById('swal-input5')).valueAsNumber;
        const dateEntrePrd = (<HTMLInputElement>document.getElementById('swal-input6')).valueAsDate;
        const dateExpPrd = (<HTMLInputElement>document.getElementById('swal-input7')).valueAsDate;
        this.prd.ref = refPrd;
        this.prd.libelle = libellePrd;
        this.prd.quantite = quantitePrd;
        this.prd.seuil = seuilPrd;
        this.prd.unite = unitePrd;
        this.prd.date_entree =  dateEntrePrd;
        this.prd.date_exp = dateExpPrd;
        
       return { ref: refPrd, libelle : libellePrd, quantite: quantitePrd, unite: unitePrd, seuil: seuilPrd, date_entree: dateEntrePrd, date_exp:dateExpPrd };
      }
    }).then((res) => {
      if (res.isConfirmed){
        this.activatedRoute.params.subscribe(
          params => {
            this.produitService.addProduct(this.prd).subscribe((res) => {
              this.findAll();
              swalWithBootstrapButtons.fire(
                'Ajouté',
                "Utilisateur ajouté avec succés :)",
                'success'
              );
              this.route.navigate(['pages/users/list-utilisateurs']);
              return res;
            });
          }
        )
      }
      else if (/* Read more about handling dismissals below */res.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Fermé',
          "Produit non ajouté  :(",
          'error'
        );
      }
    })
  }
}
