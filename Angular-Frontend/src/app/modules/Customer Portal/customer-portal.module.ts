import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { LoginComponentComponent } from '../components/login-component/login-component.component';
import { NavbarComponentComponent } from '../components/navbar-component/navbar-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component'
import { SharedModule } from '../components/shared.module';
import { CustomerInquiryComponent } from './customer-inquiry/customer-inquiry.component';

@NgModule({
  declarations: [CustomerLoginComponent, LoginComponentComponent, CustomerDashboardComponent,NavbarComponentComponent, CustomerInquiryComponent],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class CustomerPortalModule {}
