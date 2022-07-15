import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import {LandingPageRoutingModule} from "./landing-page-routing.module"
import {PortalCardComponent} from "../components/portal-card/portal-card.component"

@NgModule({
  declarations: [
    LandingPageComponent,
    PortalCardComponent
  ],
  imports: [
    CommonModule,LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
