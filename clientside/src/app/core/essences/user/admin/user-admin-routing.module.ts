
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../share/_guards/auth.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const routes: Routes = [
    // { path: 'amdin/users/:id', component: UserDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class UserAdminRoutingModule { }
