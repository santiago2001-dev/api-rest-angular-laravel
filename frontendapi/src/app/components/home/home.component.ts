import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {personaje} from 'src/app/models/personaje'
import { ApiRickAndMortyService } from 'src/app/services/api-rick-and-morty.service';
import { LoginService } from 'src/app/services/login.service';
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
    private router : Router,
    private serv : LoginService

    
  ) { }

  ngOnInit(): void {
    this.getPerson()
    this.meinfo()
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
closesecion(){
  localStorage.removeItem('token')
  this.router.navigate(['/login'])

}

meinfo(){
  let token = localStorage.getItem('token')
  this.serv.me(token).subscribe(
    data=>{
      console.log(data)
    },error=>{
      console.log(error)
    }
  )
}
}

