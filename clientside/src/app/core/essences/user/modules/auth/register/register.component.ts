import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../../../../../share/_services/alert.service';
import { UserService } from '../../../user.service';
import { fadeInAnimation } from '../../../../../../share/_animations/fade-in.animation';
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    selector: 'app-register',
    animations: [fadeInAnimation]
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;

        this.userService.create(this.model)
            .subscribe(
                (res) => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                (err) => {
                    console.log(err);

                    this.alertService.error(err);
                    this.loading = false;
                    // this.router.navigate(['/']);
                });
    }
}
