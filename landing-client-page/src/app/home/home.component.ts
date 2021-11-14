import { Component, OnInit } from '@angular/core';
import {CATEGORIAS, Categorias, EMPRESAS, Empresas, PRODUCTOS, Productos} from '../Listado-Business';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorias = CATEGORIAS;

  empresas = EMPRESAS;

  productos = PRODUCTOS;

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


  onSelectCategory(categoria: Categorias){
    const category = document.getElementById("showCategories");
    const business = document.getElementById("showBusiness");
    const zona = document.getElementById("zona");
    const welcome = document.getElementById("welcome");
    category!.classList.add('hidden');
    business!.classList.remove('hidden');
    welcome!.classList.add('hidden');
    zona!.innerHTML = `${categoria.nombre}`;
  };

  onSelectBusiness(empresa: Empresas){
    const business = document.getElementById("showBusiness");
    const product = document.getElementById("showProducts");
    const zona = document.getElementById("zona");
    business!.classList.add('hidden');
    product!.classList.remove('hidden');
    zona!.innerHTML = `${empresa.nombre}`;

  }

}
