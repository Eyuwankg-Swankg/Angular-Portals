import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import {VendorPortalRoutingModule} from "./vendor-portal-routing.module"


@NgModule({
  declarations: [
    VendorLoginComponent
  ],
  imports: [
    CommonModule,VendorPortalRoutingModule
  ]
})
export class VendorPortalModule { }
