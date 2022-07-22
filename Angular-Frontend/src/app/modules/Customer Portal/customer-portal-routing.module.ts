import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CustomerLoginComponent} from "./customer-login/customer-login.component"
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component"
import { CustomerInquiryComponent } from './customer-inquiry/customer-inquiry.component';

const routes:Routes =[
  {
    path:'l',component:CustomerLoginComponent
  },
  {
    path:'dashboard',component:CustomerDashboardComponent
  },
  {
    path:'',component:CustomerInquiryComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CustomerPortalRoutingModule { }
