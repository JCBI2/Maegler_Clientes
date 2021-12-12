import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient: HttpClient) { }


  crearUsuario(nombre_completo:any, correo:any, contra:any){
    return this.httpClient.post(`http://localhost:3000/clientes`,{
      nombre: nombre_completo,
      email: correo,
      password: contra
    });
  }
}
