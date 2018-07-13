import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from '../essences/user/admin/users/users.component';
import { UserDetailComponent } from '../essences/user/admin/users/user-detail/user-detail.component';
import { AdminGuard } from '../../share/_guards/admin.guard';

const routes: Routes = [
    {
        path: 'admin',
        component:  AdminComponent,
        canActivate: [AdminGuard],
        children: [
            // TODL: It should be relocated in the user's admin routing module somehow.
            // (core\essences\user\admin\user-admin-routing.module.ts)
            { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
            { path: 'users/:id', component: UserDetailComponent, canActivate: [AdminGuard] }
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: false }),
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

export const AdminRoutedComponents = [
    AdminComponent
];
