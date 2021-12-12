import { Component, OnInit } from '@angular/core';
import {RECORD, Record} from '../Listado-Business';
import { OrdenesService } from '../ordenes.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  record = RECORD;

  activas: any=[];

  historial: any=[];

  constructor(private ordenesService: OrdenesService){}

  ngOnInit(): void {
  }

  menu(){
    const element = document.getElementById("btnmenu");
    const close = document.getElementById("btn-x");
    const change = document.getElementById("menuOpened")

    if(close){
      element!.innerHTML = `
      <svg class="main-menu block h-9 w-9" style="color: #E06D60;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      `;
      change!.classList.add('menu-opened'); 
    }else{
      element!.innerHTML = `
      <svg id="btn-x" class="main-menu block h-9 w-9" style="color: #E06D60;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `;
      change!.classList.remove('menu-opened'); 
    };
  };

  Active(){
    const foo = document.getElementById("foo");
    const activas = document.getElementById("activas");
    const historial = document.getElementById("historial");
    const btnActivas = document.getElementById("btn-activas");
    const btnHistorial = document.getElementById("btn-historial");
    foo!.classList.remove('foo');
    activas!.classList.remove('hidden');
    btnActivas!.classList.add('selected');
    historial!.classList.add('hidden');
    btnHistorial!.classList.remove('selected');
    
    this.activas = [];

    this.ordenesService.obtenerOrdenes(localStorage.getItem("id")).subscribe((res:any)=>{
      console.log(res);
      for(let i = 0; i < res.length; i++){
        if(res[i].estado != "Entregada"){
          this.activas.push(res[i]);
        }
      }
    },
    error=>console.log(error))
  };

  Historial(){
    const foo = document.getElementById("foo");
    const historial = document.getElementById("historial");
    const activas = document.getElementById("activas");
    const btnActivas = document.getElementById("btn-activas");
    const btnHistorial = document.getElementById("btn-historial");
    foo!.classList.remove('foo');
    historial!.classList.remove('hidden');
    btnHistorial!.classList.add('selected');
    activas!.classList.add('hidden');
    btnActivas!.classList.remove('selected');

    this.historial = [];
    this.ordenesService.obtenerOrdenes(localStorage.getItem("id")).subscribe((res:any)=>{
      console.log(res);
      for(let i = 0; i < res.length; i++){
        if(res[i].estado == "Entregada"){
          this.historial.push(res[i]);
        }
      }
    },
    error=>console.log(error))
  };

}
