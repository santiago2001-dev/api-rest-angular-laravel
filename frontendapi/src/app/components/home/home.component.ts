import { Component, OnInit } from '@angular/core';
import {personaje} from 'src/app/models/personaje'
import { ApiRickAndMortyService } from 'src/app/services/api-rick-and-morty.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
personaje :personaje[] = []
imagen  :[] =[]
  constructor(
    private servicio :ApiRickAndMortyService,

    
  ) { }

  ngOnInit(): void {
    this.getPerson()
  }
getPerson(){
  this.servicio.getPerson().subscribe(
    data=>{
      this.personaje = data.results
      

      console.log(this.imagen)
    },error=>{

    }
  )
}
}

