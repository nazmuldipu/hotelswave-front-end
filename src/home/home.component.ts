import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <header></header>
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
