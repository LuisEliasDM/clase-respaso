import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { map, Observable } from 'rxjs';
import { StorageHelper } from '../lib/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    let body = {
      username: username,
      password: password
    }
    return this.http.post("http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login", body)
  }

  searchPokemon(pokemon: string): Observable<any>{
    return this.http.post("http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/pokemon",{
      endpoint: "pokemon/" + pokemon
    })
  }

  refreshToken(): Observable<any>{
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh', {
      session: StorageHelper.getItem("session")
    })
  }
}
