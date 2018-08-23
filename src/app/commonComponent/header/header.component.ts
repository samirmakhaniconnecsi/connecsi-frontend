import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  togelHeaderMenu: boolean;
  togelMainMenu: boolean;
  constructor() {
  }

  ngOnInit() {
    this.togelHeaderMenu = true;
    if (window.screen.width > 500) {
      this.togelMainMenu = true;
    } else {
      this.togelMainMenu = false;
    }
  }
  headersubmenu() {
    this.togelHeaderMenu = !this.togelHeaderMenu;
  }
  headerMainmenu() {
    if (window.screen.width < 500) {
      this.togelMainMenu = !this.togelMainMenu;
    } else {
      this.togelMainMenu = true;
    }
  }

}
