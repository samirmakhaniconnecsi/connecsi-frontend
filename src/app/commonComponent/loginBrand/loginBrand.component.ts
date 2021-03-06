import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
AuthService
@Component({
  selector: 'app-loginBrand',
  templateUrl: './loginBrand.component.html',
  styleUrls: ['./loginBrand.component.css']
})
export class LoginBrandComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userservice: UserService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router, ) { }

  ngOnInit() {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')])],
      password: [null, Validators.required],
    });
  }
  loginUser(loginForm) {
    if (!loginForm.valid) {
      Object.keys(loginForm.controls).forEach(field => {
        const control = loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    } else {
      this.userservice.loginService(loginForm.value).subscribe((res) => {
        this.toastrService.success("Login is successfully Done");
        window.sessionStorage.setItem("connecsi_key", res.body["user_id"]);
        this.authService.setLoginStatus(true);
        this.router.navigate(['/dashboard']);

      }), (error) => {
        this.toastrService.error("Something went wrong!")
      }
    }
  }
}
