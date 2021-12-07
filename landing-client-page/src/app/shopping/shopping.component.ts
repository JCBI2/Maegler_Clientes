import { Component, OnInit } from '@angular/core';
import {RESUMEN, Resumen} from '../Listado-Business';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  resumen = RESUMEN;

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

  backSummaryProducts(){
    const divSummaryProducts = document.getElementById("summaryProducts");
    const nav = document.getElementById("nav");
    const finalize = document.getElementById("finalize");
    divSummaryProducts!.classList.remove('hidden');
    nav!.classList.remove('hidden');
    finalize!.classList.add('hidden');
  }

  processing(){
    const divSummaryProducts = document.getElementById("summaryProducts");
    const nav = document.getElementById("nav");
    const finalize = document.getElementById("finalize");
    divSummaryProducts!.classList.add('hidden');
    nav!.classList.add('hidden');
    finalize!.classList.remove('hidden');
  }

  finalize(){
    const ready = document.getElementById("ready");
    const finalize = document.getElementById("finalize");
    ready!.classList.remove('hidden');
    finalize!.classList.add('hidden')
  }
}