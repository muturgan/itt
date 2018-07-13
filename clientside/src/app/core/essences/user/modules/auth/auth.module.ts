import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AlertService } from '../../../../../share/_services/alert.service';
import { UserService } from '../../user.service';
import { AuthenticationService } from './authentication.service';
import { AlertComponent } from '../../../../../share/_directives/alert/alert.component';
import { AuthGuard } from '../../../../../share/_guards/auth.guard';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AdminGuard } from '../../../../../share/_guards/admin.guard';

import { EqualValidator } from '../../directives/equal-validator.directive';
// used to create fake backend
import { fakeBackendProvider } from '../../../../../share/_helpers/fake-backend';
import { JwtInterceptor } from '../../../../../share/_helpers/jwt.interceptor';


const components = [ ];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    EqualValidator
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    EqualValidator,
    FormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MDBBootstrapModulesPro
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    AdminGuard
  ]
})
export class AuthenticationModule { }
