import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    PortalCardComponent,
    TableComponentComponent,
    BreadCrumbComponent,
  ],
  imports: [CommonModule],
  exports: [PortalCardComponent, TableComponentComponent, BreadCrumbComponent],
})
export class SharedModule {}
