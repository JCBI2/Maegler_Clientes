import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-l',
  templateUrl: './menu-l.component.html',
  styleUrls: ['./menu-l.component.css']
})
export class MenuLComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.route.navigate(['']);
  }

}
