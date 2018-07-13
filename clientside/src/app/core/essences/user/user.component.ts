import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../share/_animations/fade-in.animation';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user.model';
import { AlertService } from '../../../share/_services/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [fadeInAnimation]
})
export class UserComponent implements OnInit {
  user: User;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;

    // TODO: Temporary solution for the case of the asyncronous response.
    this.user = new User();

    this.userService.getById(this.userId).subscribe(
      (res) => {
        this.user.updateUserData(res['username'], res['email'], '');
      },
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  save() {
    this.user.updateUserData(this.user.username, this.user.email, '');
    this.user.id = this.userId;

    this.userService.update(this.user).subscribe(
      (res) => {
        this.alertService.getMessage();
        console.log(res);
      },
      (err) => {
        this.alertService.error(err);
        console.error(err);
      }
    );
  }
}
