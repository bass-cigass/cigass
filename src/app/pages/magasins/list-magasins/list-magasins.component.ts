import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MagasinService } from 'app/services/magasin.service';

@Component({
  selector: 'app-list-magasins',
  templateUrl: './list-magasins.component.html',
  styleUrls: ['./list-magasins.component.scss']
})
export class ListMagasinsComponent implements OnInit {

  magasins : any;
  constructor(private route : Router, private activatedRoute: ActivatedRoute, private magasinService : MagasinService) { this.findAll();}

  ngOnInit(): void {
  }

  addMagasin(){

  }

  findAll(){
    
  }

}
