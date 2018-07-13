import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    id: number;

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.id = +route.params['id'];

        if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['token']) {
            if (this.id) {
                if (JSON.parse(localStorage.getItem('currentUser'))['id'] === this.id) {
                     return true;
                } else {
                    this.router.navigate(['/nothing-to-see-here']);
                    return false;
                }
            }

            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

        return false;
    }
}
