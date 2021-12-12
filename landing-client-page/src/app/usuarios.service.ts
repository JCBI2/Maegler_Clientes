import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  ingresar(correo: any, contra: any){
    return this.httpClient.post(`http://localhost:3000/clientes/login`,{
      email: correo,
      password: contra
    });
  }

  datos(){
    let token: string = localStorage.getItem("token") || "";
    return this.httpClient.get("http://localhost:3000/clientes/client",{
      headers: {"Authorization": token}
    })
  }
}
