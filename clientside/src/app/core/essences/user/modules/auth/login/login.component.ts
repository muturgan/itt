import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../../../../../../share/_services/alert.service';
import { UserService } from '../../../user.service';
import { fadeInAnimation } from '../../../../../../share/_animations/fade-in.animation';
import { User } from '../../../user.model';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    animations: [fadeInAnimation]
})

export class LoginComponent implements OnInit {
    user: User = new User();
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) { }
        private userService: UserService;

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        if (this.route.snapshot.url.join('') === 'logout') {
            this.logout();
        }
    }

    login() {
        // reset login status
        this.logout();

        this.loading = true;
        this.authenticationService.login(this.user.email, this.user.password).subscribe(
            (data) => {
                this.router.navigate([this.returnUrl]);
            },
            (err) => {
                this.alertService.error(err);
                this.loading = false;
            });
    }

    logout() {
        this.authenticationService.logout();
    }
}
