import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeePortalRoutingModule } from './employee-portal-routing.module';
import { SharedModule } from '../components/shared.module';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { EmployeeLeaveDataComponent } from './employee-leave-data/employee-leave-data.component';
import { EmployeeAuthGuardGuard } from './employee-auth-guard.guard';
@NgModule({
  declarations: [
    EmployeeLoginComponent,
    EmployeeDashboardComponent,
    EmployeePayrollComponent,
    EmployeeLeaveDataComponent,
  ],
  imports: [CommonModule, EmployeePortalRoutingModule, SharedModule],
  providers: [EmployeeAuthGuardGuard],
})
export class EmployeePortalModule {}
