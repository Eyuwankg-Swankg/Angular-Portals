import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  @Input() table_data: any = [];
  @Input() style_class: string[] = [];
  
  @Output() display_modal: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  sendToOpenModal(rowData: any): void {
    this.display_modal.emit(rowData);
  }
}
