import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { Store } from '../../../share/_globals/store';


@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private store: Store
    ) { }

    getAll() {
        return this.http.get<User[]>(`${this.store.REST_URL}/api/users/`);
    }

    getById(id: number) {
        return this.http.get(`${this.store.REST_URL}/api/user/${id}/`);
    }

    create(user: User) {
        return this.http.post(`${this.store.REST_URL}/api/user/registration/`, user);
    }

    update(user: User) {
        return this.http.put(`${this.store.REST_URL}/api/user/${user.id}/`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.store.REST_URL}/api/user/${id}/`);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser')) || false;
    }
}
