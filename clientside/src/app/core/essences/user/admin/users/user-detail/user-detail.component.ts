import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../../../../share/_animations/fade-in.animation';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../user.service';
import { User } from '../../../user.model';
import { AlertService } from '../../../../../../share/_services/services';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [fadeInAnimation]
})
export class UserDetailComponent implements OnInit {
  user: User;
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;

    // TODO: Temporary solution for the case of the asyncronous response.
    this.user = new User();

    this.userService.getById(this.userId).subscribe(
      (res) => {
        this.user.updateUserData(res['username'], res['email'], '', res['is_active']);
      },
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  save() {
    this.user.updateUserData(this.user.username, this.user.email, '', this.user.is_active);
    this.user.id = this.userId;

    this.userService.update(this.user).subscribe(
      (res) => {
        this.alertService.getMessage();
      },
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  changeUserStatus(event) {
    this.user.is_active = event.target.checked;
  }
}
