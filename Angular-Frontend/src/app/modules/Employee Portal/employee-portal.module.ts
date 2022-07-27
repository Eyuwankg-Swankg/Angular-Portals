import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeePortalRoutingModule } from './employee-portal-routing.module';
import { SharedModule } from '../components/shared.module';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
@NgModule({
  declarations: [EmployeeLoginComponent, EmployeeDashboardComponent],
  imports: [
    CommonModule,
    EmployeePortalRoutingModule,
    SharedModule,
  ],
})
export class EmployeePortalModule {}
