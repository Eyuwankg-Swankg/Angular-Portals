import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {CustomerLoginComponent} from "./customer-login/customer-login.component"
import {CustomerDashboardComponent} from "./customer-dashboard/customer-dashboard.component"
import { CustomerInquiryComponent } from './customer-inquiry/customer-inquiry.component';
import { CustomerSaleorderComponent } from './customer-saleorder/customer-saleorder.component';
import { CustomerDeliveryComponent } from './customer-delivery/customer-delivery.component';

const routes:Routes =[
  {
    path:'l',component:CustomerLoginComponent
  },
  {
    path:'dashboard',component:CustomerDashboardComponent
  },
  {
    path:'f',component:CustomerInquiryComponent
  },
  {
    path:'f',component:CustomerSaleorderComponent
  },
  {
    path:'',component:CustomerDeliveryComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CustomerPortalRoutingModule { }
