import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  registroFomr : FormGroup
  constructor(
    private router : Router,
    private servicio : LoginService,
    private fb : FormBuilder
  ) { 
    this.registroFomr = this.fb.group({
      name : ['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

    registro(){
      if(this.registroFomr.invalid){
        swal.fire({
          icon: 'error',
          title: 'los campos son obligatorios',
        
        })
      }else{
        const user :user ={
          name : this.registroFomr.get('name')?.value,
          email : this.registroFomr.get('email')?.value,
          password :  this.registroFomr.get('password')?.value
        }
        
        this.servicio.register(user).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/login'])
            
          },error=>{
            swal.fire({
              icon: 'error',
              title: error,
            
            })
          }
      )
      }

    }


    get email(){
      return this.registroFomr.get('email')
    }
    
    
    get password(){
      return this.registroFomr.get('password')
    }
    get name(){
      return this.registroFomr.get('name')
    }
}
