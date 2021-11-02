import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    const element = document.getElementById("btnmenu");
    const close = document.getElementById("btn-x");
    const menu = document.getElementById("menuOpened");

    if(close){
      element!.innerHTML = `
      <svg class="main-menu block h-9 w-9" style="color: #E06D60;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      `;
      menu!.innerHTML = "";
    }else{
      element!.innerHTML = `
      <svg id="btn-x" class="main-menu block h-9 w-9" style="color: #E06D60;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `;

      menu!.innerHTML = `
        <div style="background-color: #E06D60; height: 100vh; width: 100%; position: fixed; margin-top: 4.5rem; opacity: 93%;">
          <button class="ml-12 mr-8 mt-8 pl-24 pr-24 btn-menuR" type="button">
            REGISTRATE
          </button>
          <button class="ml-12 mt-8 pl-20 btn-menuS" type="button">
            INICIAR SESIÓN
          </button>
          <button class="ml-12 mt-8 btn-menuC" type="button">
            CONTÁCTANOS
          </button>
          <button class="question-fre ml-12 pl-16 pr-20" type="button">
            Preguntas Frecuentes
          </button>
        </div>
      `;
    };
  };


}
