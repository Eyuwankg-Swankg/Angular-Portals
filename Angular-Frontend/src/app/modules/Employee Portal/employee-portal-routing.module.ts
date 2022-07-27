import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLeaveDataComponent } from './employee-leave-data/employee-leave-data.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';

const routes: Routes = [
  {
    path: 'L',
    component: EmployeeLoginComponent,
  },
  {
    path: 'dashboard',
    component: EmployeeDashboardComponent,
  },
  {
    path: '',
    component: EmployeePayrollComponent,
  },
  {
    path: 'leavedata',
    component: EmployeeLeaveDataComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePortalRoutingModule {}
