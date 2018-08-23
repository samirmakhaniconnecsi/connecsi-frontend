import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-header',
  templateUrl: './loginHeader.component.html',
  styleUrls: ['./loginHeader.component.css']
})
export class LoginHeaderComponent implements OnInit {

  togelLoginHeaderMenu: boolean;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

    this.togelLoginHeaderMenu = true;
  }
  logout() {
    window.sessionStorage.removeItem("connecsi_key");
    this.authService.setLoginStatus(false);
    this.router.navigate(['/platform']);
  }
  loginHeadersubmenu() {
    this.togelLoginHeaderMenu = !this.togelLoginHeaderMenu;
  }
}
