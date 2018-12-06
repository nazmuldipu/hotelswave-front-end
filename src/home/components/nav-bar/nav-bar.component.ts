import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  show = false;

  constructor() {}

  toggleCollapse() {
    this.show = !this.show;
  }

  // TODO: Navbar sticky top after scrolling
}
