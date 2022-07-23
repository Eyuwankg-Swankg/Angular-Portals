import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { ModalBoxComponent } from './modal-box/modal-box.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    PortalCardComponent,
    TableComponentComponent,
    BreadCrumbComponent,
    ModalBoxComponent,
    LoadingScreenComponent,
  ],
  imports: [CommonModule],
  exports: [
    PortalCardComponent,
    TableComponentComponent,
    BreadCrumbComponent,
    ModalBoxComponent,
    LoadingScreenComponent
  ],
})
export class SharedModule {}
