import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './essences/user/user.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    UserModule,
    AdminModule
  ],
  exports: [
    UserModule,
    AdminModule
  ]
})
export class CoreModule { }
