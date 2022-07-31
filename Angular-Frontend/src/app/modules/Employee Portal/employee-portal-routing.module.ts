import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLeaveDataComponent } from './employee-leave-data/employee-leave-data.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { EmployeeAuthGuardGuard } from './employee-auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: EmployeeLoginComponent,
  },
  {
    path: 'dashboard',
    component: EmployeeDashboardComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path: 'payroll',
    component: EmployeePayrollComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
  {
    path: 'leavedata',
    component: EmployeeLeaveDataComponent,
    canActivate:[EmployeeAuthGuardGuard]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePortalRoutingModule {}
