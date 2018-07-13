
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: true }),
    ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule { }
