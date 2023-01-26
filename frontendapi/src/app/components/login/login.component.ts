import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {credenciales} from 'src/app/models/user'
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup

  constructor(
    private router : Router,
    private loginServ : LoginService,
    private fb : FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
      
 
 
     })
   }

  ngOnInit(): void {
  }


  autentication(){
    if(this.loginForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })

    }else{
     const credenciales : credenciales = {
        email : this.loginForm.get('email')?.value,
        password :  this.loginForm.get('password')?.value


      }
      this.loginServ.login(credenciales).subscribe(
        (data: any)=>{
          
          
            localStorage.setItem('token',data.access_token);
            this.router.navigate(['/home'])
          
       },error=>{
          swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña incorrectos',
          
          })
        }
      )

    }


  }



get email(){
  return this.loginForm.get('email')
}


get password(){
  return this.loginForm.get('password')
}



  
}
