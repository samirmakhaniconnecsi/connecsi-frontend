import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  classTogal: boolean;
  constructor() { }

  ngOnInit() {
    this.classTogal = true;
  }
  sidenavBar() {
    if (window.screen.width > 1023) {
      this.classTogal = !this.classTogal;
    }
  }
}
