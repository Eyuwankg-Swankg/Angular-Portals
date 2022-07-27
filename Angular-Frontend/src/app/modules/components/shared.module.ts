import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { ModalBoxComponent } from './modal-box/modal-box.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import {LoginComponentComponent} from "./login-component/login-component.component"
import {NavbarComponentComponent} from "./navbar-component/navbar-component.component"
@NgModule({
  declarations: [
    PortalCardComponent,
    TableComponentComponent,
    BreadCrumbComponent,
    ModalBoxComponent,
    LoadingScreenComponent,LoginComponentComponent,NavbarComponentComponent
  ],
  imports: [CommonModule,MatInputModule,
    MatIconModule,ReactiveFormsModule],
  exports: [
    PortalCardComponent,
    TableComponentComponent,
    BreadCrumbComponent,
    ModalBoxComponent,
    LoadingScreenComponent,LoginComponentComponent,NavbarComponentComponent
  ],
})
export class SharedModule {}
