import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CustomerLoginComponent} from "./customer-login/customer-login.component"
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component"

const routes:Routes =[
  {
    path:'',component:CustomerLoginComponent
  },
  {
    path:'dashboard',component:CustomerDashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CustomerPortalRoutingModule { }
