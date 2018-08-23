import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    message: any = false;
    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const authToken = JSON.parse(window.sessionStorage.getItem('connecsi_key'));
        if (authToken != null && authToken.toString().length > 0) {
            // logged in so return true
            this.authService.setLoginStatus(true);
            return true;
        }
        this.authService.setLoginStatus(false);
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/platform'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}