import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../../../share/_animations/fade-in.animation';
import { HttpClient } from '@angular/common/http';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { AlertService } from '../../../../../share/_services/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [ fadeInAnimation ]
})
export class UsersComponent implements OnInit {
  currentUser: User;
  usersList: Array<User>;
  removeModal: any;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.currentUser = new User();

    this.userService.getAll().subscribe((res) => {
      this.usersList = res;
    }, (err) => {
      this.alertService.error(err);
    });
  }

  changeUserStatus(event: any, userId: number) {
    this.currentUser.id = userId;
    this.currentUser.is_active = event.target.checked;

    this.userService.update(this.currentUser).subscribe((res) => {
      this.alertService.getMessage();
    }, (err) => {
      this.alertService.error(err);
    });
  }

  openRemoveModal(RemoveUser, selectedUser) {
    this.currentUser = selectedUser;
    this.removeModal = RemoveUser;
    this.removeModal.show();
  }

  removeUser(userId) {
    this.userService.delete(userId).subscribe(
      (res) => {
        this.removeModal.hide();
        this.usersList = this.usersList.filter((user) => {
          if (user.id !== userId) {
            return (user);
          }
        });
        this.alertService.getMessage();
      },
      (err) => {
        this.alertService.error(err);
      }
    );
  }
}
