import { Injectable } from '@angular/core';
import {credenciales, user} from 'src/app/models/user'
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
api = environment.servidor
public token : String |any;
tokenDes : String |any
  constructor(
    private http : HttpClient,
        private jwHelper : JwtHelperService


  ) { }
login(credenciales : credenciales):Observable<any>{
  let url = `${this.api}/login`
  return this.http.post(url,credenciales);

}
isLoggin():boolean{
  this.token = localStorage.getItem('token');
  if(this.jwHelper.isTokenExpired(this.token) || !localStorage.getItem('token')){
    return false

  }
  return true

}


}

