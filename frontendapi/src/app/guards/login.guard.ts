import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import {LoginService} from 'src/app/services/login.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private loginserv : LoginService,
  private router : Router 
  ){
  }
  
  canActivate(): boolean{
    if(!this.loginserv.isLoggin()){
      swal.fire({
        icon: 'error',
        title: 'debes iniciar sesion primero',
    })
    this.router.navigate(['/login'])
    return false
    }
    return true 
  }
}
