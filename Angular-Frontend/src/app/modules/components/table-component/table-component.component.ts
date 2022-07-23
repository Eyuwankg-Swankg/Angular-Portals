import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  @Input() table_data: any = [];
  @Input() style_class: string[] = [];
  
  @Output() displayFragment: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  sendToOpenFragment(rowData: any): void {
    this.displayFragment.emit(rowData);
  }
}
