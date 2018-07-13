import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthenticationModule } from './modules/auth/auth.module';
import { UserRoutingModule } from './user-routing.module';
import { UserAdminModule } from './admin/admin.module';
import { UserService } from './user.service';
import { AlertService } from '../../../share/_services/services';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    UserRoutingModule,
    UserAdminModule,
    MDBBootstrapModulesPro
  ],
  exports: [
    RouterModule,
    UserAdminModule,
    AuthenticationModule
  ],
  providers: [
    UserService,
    AlertService
  ]
})
export class UserModule { }
