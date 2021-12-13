import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient: HttpClient) { }


  crearUsuario(nombre_completo:any, correo:any, contra:any){
    return this.httpClient.post(`https://maegler.herokuapp.com/clientes`,{
      nombre: nombre_completo,
      email: correo,
      password: contra
    });
  }

  subirOrden(empresa: any, products: any, log: any, dir: any, sub: any, to: any){
    console.log(dir)
    return this.httpClient.post("https://maegler.herokuapp.com/ordenes",{
      id_cliente: localStorage.getItem("id"),
      empresa: empresa,
      productos:  products,
      logo: log,
      dir: dir,
      subtotal: sub,
      total: to
    });
  }

  obtenerOrdenes(id: any){
    return this.httpClient.get(`https://maegler.herokuapp.com/ordenes/${id}/alls`,{})
  }
}
