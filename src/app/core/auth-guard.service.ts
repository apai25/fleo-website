import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  routeURL: string;

  constructor(private authService: AuthService, private router: Router) {
    this.routeURL = this.router.url;
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.authService.user.subscribe((user) => {
        if (!user && this.routeURL !== '/homepage') {
          this.routeURL = '/login';
          this.router.navigate(['/homepage'], {
            queryParams: {
              return: 'login'
            }
          });
          alert("Not logged in")
          return resolve(false);
        } else {
          this.routeURL = this.router.url;
          return resolve(true);
        }
      });
    });
  }
}