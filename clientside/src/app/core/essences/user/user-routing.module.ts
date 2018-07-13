
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { AuthGuard } from '../../../share/_guards/auth.guard';
import { UserAdminRoutingModule } from './admin/user-admin-routing.module';


const routes: Routes = [
    { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        UserAdminRoutingModule,
        AuthRoutingModule
    ],
    exports: [ RouterModule ]
})
export class UserRoutingModule { }
