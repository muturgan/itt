import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './admin.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../../share/_services/services';

@NgModule({
  declarations: [
    UserAdminComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro,
    RouterModule,
    FormsModule
  ],
  exports: [
    UserAdminComponent,
    UserDetailComponent
  ],
  providers: [
    UserService,
    AlertService
  ]
})
export class UserAdminModule { }
