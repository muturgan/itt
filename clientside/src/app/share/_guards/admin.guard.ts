import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return new Observable<boolean>((observer) => {
            if (localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['token']) {
                this.http.post('http://127.0.0.1:8000/api/user/is-admin/', {}).toPromise().then((res) => {
                    if (res) {
                        this.completeTask(observer, true);
                    } else {
                        this.completeTask(observer, false);
                    }
                }).catch((err) => {
                    this.completeTask(observer, false);
                });
            } else {
                this.completeTask(observer, false);
            }
        });
    }

    completeTask(observer, status: boolean) {
        observer.next(status);

        if (!status) {
            this.router.navigate(['/login']);
        }

        observer.complete();
    }
}
