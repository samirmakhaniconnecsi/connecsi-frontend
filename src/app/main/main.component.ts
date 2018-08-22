import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  subscription: Subscription;
  message: any;
  constructor(private authService: AuthService, private router: Router, ) {
    this.subscription = this.authService.getLoginStatus().subscribe(message => { this.message = message.text; });
  }

  ngOnInit() {
    const authToken = JSON.parse(window.sessionStorage.getItem('connecsi_key'));
    if (authToken != null && authToken.toString().length > 0) {

      // logged in so return true
      this.authService.setLoginStatus(true);
      this.router.navigate(['/dashboard']);
    } else {
      this.authService.setLoginStatus(false);
    }
  }

}
