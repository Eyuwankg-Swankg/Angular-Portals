import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import {LandingPageRoutingModule} from "./landing-page-routing.module"
import { SharedModule } from '../components/shared.module';
@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,LandingPageRoutingModule,SharedModule
  ]
})
export class LandingPageModule { }
