import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private categoriasService: CategoriasService){}

  categorys: any = [];
  actualCategory = "";

  business: any = [];

  products: any = [];


  productsShopping: any=[];


  arrow1 = false;

  arrow2 = false;

  ngOnInit(): void {
    this.generarCategorias();
  }

  generarCategorias(){
    this.categoriasService.obtenerCategorias().subscribe(res=>{
      console.log(res);
      for(let i = 0; i < res.length; i++){
        this.categorys.push(res[i]);
      }
    },
    error=>console.log(error))
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


  arrowCategory(){
    const category = document.getElementById("showCategories");
    const business = document.getElementById("showBusiness");
    const zona = document.getElementById("zona");
    const welcome = document.getElementById("welcome");
    category!.classList.remove('hidden');
    business!.classList.add('hidden');
    welcome!.classList.remove('hidden');
    this.arrow1 = false;
    zona!.innerHTML = `Categorías`;
    this.business = [];
  }

  arrowBusiness(){
    const business = document.getElementById("showBusiness");
    const product = document.getElementById("showProducts");
    const zona = document.getElementById("zona");
    business!.classList.remove('hidden');
    product!.classList.add('hidden');
    this.arrow1 = true;
    this.arrow2 = false;
    zona!.innerHTML = `${this.actualCategory}`;
    this.products = [];
  }

  onSelectCategory(categoria:any){
    const category = document.getElementById("showCategories");
    const business = document.getElementById("showBusiness");
    const zona = document.getElementById("zona");
    const welcome = document.getElementById("welcome");
    category!.classList.add('hidden');
    business!.classList.remove('hidden');
    welcome!.classList.add('hidden');
    this.arrow1 = true;
    zona!.innerHTML = `${categoria.nombre}`;
    this.actualCategory = categoria.nombre;
    for(let i = 0; i < categoria.empresas.length; i++){
      this.business.push(categoria.empresas[i]);
    }
  };

  onSelectBusiness(empresa:any){
    const business = document.getElementById("showBusiness");
    const product = document.getElementById("showProducts");
    const zona = document.getElementById("zona");
    business!.classList.add('hidden');
    product!.classList.remove('hidden');
    this.arrow1 = false;
    this.arrow2 = true;
    zona!.innerHTML = `${empresa.nombre}`;
    for(let i = 0; i < empresa.productos.length; i++){
      this.products.push(empresa.productos[i]);
    }
  }


  less(id:any){
    var temp = 0;
    const units = document.getElementById(`product${id}`);
    temp = Number(units?.textContent);
    if(temp != 0){
      temp --
      units!.innerHTML = `${temp}`;
    }
  }

  more(id:any, prod:any){
    var temp = 0;
    const units = document.getElementById(`product${id}`);
    temp = Number(units?.textContent);
    temp ++
    units!.innerHTML = `${temp}`;

    console.log(prod);

    if(this.productsShopping.length != 0){
      this.productsShopping.push(prod);
      console.log(this.productsShopping)
    }else{

      this.productsShopping.push(prod);
    }
  }

}
