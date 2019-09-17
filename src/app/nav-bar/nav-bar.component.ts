import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isColapse:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  colapse() {
    this.isColapse = !this.isColapse;
   }

}
