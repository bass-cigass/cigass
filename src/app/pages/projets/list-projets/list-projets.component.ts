import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'app/services/projet.service';

@Component({
  selector: 'app-list-projets',
  templateUrl: './list-projets.component.html',
  styleUrls: ['./list-projets.component.scss']
})
export class ListProjetsComponent implements OnInit {

  projets : any;
  constructor(private route : Router, private activatedRoute: ActivatedRoute, private projetService: ProjetService) { }

  ngOnInit(): void {
  }

  findAll(){
    this.projetService.findAll().subscribe((res: any) => {
      this.projetService = res;
    });
  }
  addProjet(){

  }
}
