import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { TableComponentComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [PortalCardComponent, TableComponentComponent],
  imports: [CommonModule],
  exports: [PortalCardComponent,TableComponentComponent],
})
export class SharedModule {}
