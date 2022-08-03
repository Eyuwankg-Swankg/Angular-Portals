import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { utils, WorkBook, WorkSheet, writeFile } from 'xlsx';
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  @Input() table_data: any = [];
  @Input() style_class: string[] = [];
  @Input() column_values: any = {};
  currentTableData: any = [];
  columnKeyValues: string[] = [];
  columnHeaderValues: string[] = [];
  filter_icon_style: any = ['customer-filter-icon'];
  filterRowRange: number = 0;
  @Output() display_modal: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.currentTableData = this.table_data;
    this.columnKeyValues = Object.keys(this.column_values);
    this.columnHeaderValues = Object.values(this.column_values);
  }
  exportToExcel(): void {
    var table_elt = document.getElementById('tableXLSX');
    var workbook = utils.table_to_book(table_elt);
    var ws = workbook.Sheets['Sheet1'];
    utils.sheet_add_aoa(ws, [['Created ' + new Date().toISOString()]], {
      origin: -1,
    });
    writeFile(workbook, 'data.xlsx');
  }
  sendToOpenModal(rowData: any): void {
    this.display_modal.emit(rowData);
  }
}
