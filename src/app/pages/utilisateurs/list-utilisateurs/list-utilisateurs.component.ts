import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'app/models/utilisateur';
import { UsersService } from 'app/services/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'listUsers-cmp',
  moduleId: module.id,
  templateUrl: 'list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent implements OnInit {


  utilisateurs : any;
  usr = new Utilisateur;

  
  
  //utilisateurs = {};
  loadingIndicator = true;
  reorderable = true;
  constructor(private activatedRoute : ActivatedRoute, private userService: UsersService, private route :Router) {    this.findAll();    }

  ngOnInit(): void { 
  }

    findAll(){
    this.userService.findAll().subscribe((res: any) => {
      this.utilisateurs = res;
    });
  
  }

  addUser(){
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
      '<input id="swal-input1" type="text" class="swal2-input" placeholder="Nom">' +
      '<input id="swal-input2" type="text" class="swal2-input" placeholder="Prenom">'+
      '<input id="swal-input3" type="text" class="swal2-input" placeholder="Email">'+
      '<input id="swal-input4" type="text" class="swal2-input" placeholder="Téléphone">'+
      '<input id="swal-input5" type="password" class="swal2-input" placeholder="Password">'+
      '<input id="swal-input6" type="text" class="swal2-input" placeholder="Role">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Oui, ajouter :)',
      cancelButtonText: 'Non, annuler :) ',
      reverseButtons: true,
      preConfirm: ()=>{
        const nomUsr = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        const prenomUsr = (<HTMLInputElement>document.getElementById('swal-input2')).value;
        const emailUsr = (<HTMLInputElement>document.getElementById('swal-input3')).value;
        const telUsr = (<HTMLInputElement>document.getElementById('swal-input4')).value;
        const  passwordUsr = (<HTMLInputElement>document.getElementById('swal-input5')).value;
        const roleUsr = (<HTMLInputElement>document.getElementById('swal-input6')).value;
        
        this.usr.nom = nomUsr;
        this.usr.prenom = prenomUsr;
        this.usr.email = emailUsr;
        this.usr.tel = telUsr;
        this.usr.password = passwordUsr;
        this.usr.roles = roleUsr;
        this.usr.isActive = 0;
        this.usr.isLogin = 0; 
        this.usr.isVerified = 0;

       return { nom: nomUsr, prenom : prenomUsr, email: emailUsr, password: passwordUsr, tel: telUsr, roles: roleUsr };
      
      }
    }).then((res) => {
      if (res.isConfirmed){
        this.activatedRoute.params.subscribe(
          params => {
            this.userService.addUser(this.usr).subscribe((res) => {
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
          "Utilisateur non ajouté  :(",
          'error'
        );
      }
    })
  }

}
