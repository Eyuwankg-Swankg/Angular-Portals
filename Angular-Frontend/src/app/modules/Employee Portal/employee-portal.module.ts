import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeePortalRoutingModule } from './employee-portal-routing.module';
import { SharedModule } from '../components/shared.module';
@NgModule({
  declarations: [EmployeeLoginComponent],
  imports: [
    CommonModule,
    EmployeePortalRoutingModule,
    SharedModule,
  ],
})
export class EmployeePortalModule {}
