import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutedComponents, AdminRoutingModule } from './admin-rouring.module';
import { UserModule } from '../essences/user/user.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AgmCoreModule } from '@agm/core';

const components = [ AdminRoutedComponents ];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserModule,
    MDBBootstrapModulesPro
  ],
  providers: []
})
export class AdminModule { }
