import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url='http://localhost:3000/api'
  constructor( private http:HttpClient) { }

  // get equipos
  getEquipos(){
    return this.http.get(this.url)
  }
}
