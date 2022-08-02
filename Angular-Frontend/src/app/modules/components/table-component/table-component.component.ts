import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  @Input() table_data: any = [];
  @Input() style_class: string[] = [];
  @Input() column_values: any = {};
  columnKeyValues: string[] = [];
  columnHeaderValues: string[] = [];
  filter_icon_style: any = ['customer-filter-icon'];
  filterRowRange: number = 0;
  @Output() display_modal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.columnKeyValues = Object.keys(this.column_values);
    this.columnHeaderValues = Object.values(this.column_values);
  }
  changeRowCount(): void {
    var tempCount: any = document.getElementById('filterRowRange');
    this.filterRowRange = tempCount.value;
  }
  sendToOpenModal(rowData: any): void {
    this.display_modal.emit(rowData);
  }
}
