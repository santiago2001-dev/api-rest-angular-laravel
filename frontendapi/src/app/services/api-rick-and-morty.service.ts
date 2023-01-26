import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRickAndMortyService {
api = 'https://rickandmortyapi.com/api/character/'
  constructor(
    private http : HttpClient,

  ) { }

getPerson():Observable<any>{
  return this.http.get(this.api);
}
}
