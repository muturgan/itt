import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class CurrentUser {
    id: number;
    name: string;
    status: boolean;

    constructor(uId: number, uName: string, uStatus: boolean) {
        this.id = uId;
        this.name = uName;
        this.status = uStatus;
    }

    setCurrentuser(uId: number, uName: string, uStatus: boolean) {
        this.id = uId;
        this.name = uName;
        this.status = uStatus;
    }

    getCurrentUser() {
        return {
            'id': this.id,
            'name': this.name,
            'status': this.status
        };
    }
}

@Injectable()
export class AuthenticationService {
    public onLoggedIn = new EventEmitter<CurrentUser>();
    currentUser = new CurrentUser(null, '', false);

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>('http://127.0.0.1:8000/api/user/login/', { email: email, password: password }).pipe(map((user) => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUser.setCurrentuser(user.id, user.username,  true);
                this.onLoggedIn.emit(this.currentUser);
            }

            return user;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser.setCurrentuser(null, '',  false);
    }
}
