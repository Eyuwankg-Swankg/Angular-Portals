import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import {EmployeePortalRoutingModule} from "./employee-portal-routing.module"


@NgModule({
  declarations: [
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule,EmployeePortalRoutingModule
  ]
})
export class EmployeePortalModule { }
