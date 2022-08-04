import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { utils, WorkBook, WorkSheet, writeFile } from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { MatDatepicker } from '@angular/material/datepicker';
import { range } from 'rxjs';
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent implements OnInit {
  @Input() table_data: any = [];
  @Input() style_class: string[] = [];
  @Input() column_values: any = {};
  @Input() page_name: string = 'Hi';
  @Input() column_data_types: any = {};
  currentTableData: any = [];
  columnKeyValues: string[] = [];
  columnHeaderValues: string[] = [];
  filter_icon_style: any = ['customer-filter-icon'];
  toggleSearch: boolean = false;
  toggleFilter: boolean = false;
  toggleFilterType: boolean = true;
  searchPlaceHolder: string = '';
  page_count: number = this.currentTableData.length / 5;
  current_page: number = 1;
  selectedColumn: number = -1;

  @Output() display_modal: EventEmitter<any> = new EventEmitter();

  constructor(private toaster: ToastrService) {}

  ngOnInit(): void {
    this.currentTableData = this.table_data;
    this.columnKeyValues = Object.keys(this.column_values);
    this.columnHeaderValues = Object.values(this.column_values);
    console.log(
      this.currentTableData,
      this.columnKeyValues,
      this.columnHeaderValues,
      this.page_count
    );
  }
  highlightHeader(columnName: number): void {
    if (this.selectedColumn == columnName) {
      this.selectedColumn = -1;
      this.toggleFilter = false;
      this.toggleSearch = false;
    } else this.selectedColumn = columnName;

    if (
      this.column_data_types[this.columnKeyValues[this.selectedColumn]] !=
      'date'
    ) {
      this.searchPlaceHolder =
        'Enter ' + this.columnHeaderValues[this.selectedColumn];
      this.toggleFilter = false;
    }
    if (
      this.column_data_types[this.columnKeyValues[this.selectedColumn]] ==
      'date'
    )
      this.toggleSearch = false;
    if (this.selectedColumn == -1 && this.toggleSearch == true) {
      this.toggleSearch = false;
    }
    console.log(this.columnKeyValues[this.selectedColumn]);
    console.log(this.selectedColumn);
  }
  // SEARCH
  onShowSearch(): void {
    if (
      this.column_data_types[this.columnKeyValues[this.selectedColumn]] !=
      'date'
    ) {
      if (this.toggleSearch == true) {
        this.toggleSearch = !this.toggleSearch;
      } else if (this.selectedColumn == -1) {
        this.showToast('Select a Column');
      } else {
        this.toggleFilter = false;
        this.toggleSearch = !this.toggleSearch;
      }
    } else {
      this.showToast('Select Filters');
    }
  }

  onSearch(event: any): void {
    const searchInput: any = document.getElementById('search-input');
    var tempData = [];
    for (var item of this.table_data) {
      var itemData = item[this.columnKeyValues[this.selectedColumn]];
      if (searchInput.value == itemData.substr(0, searchInput.value.length)) {
        tempData.push(item);
      }
    }
    this.currentTableData = tempData;
  }
  /////////////////////

  // DATE FILTERS
  onShowFilter(): void {
    if (
      this.column_data_types[this.columnKeyValues[this.selectedColumn]] ==
      'date'
    ) {
      if (this.toggleFilter == true) {
        this.toggleFilter = !this.toggleFilter;
      } else if (this.selectedColumn == -1) {
        this.showToast('Select a Column');
      } else {
        this.toggleSearch = false;
        this.toggleFilter = !this.toggleFilter;
      }
    } else {
      this.showToast('Select Search');
    }
  }

  changeFilterType(): void {
    this.toggleFilterType = !this.toggleFilterType;
  }

  getDateFiltered(): void {
    const date: any = document.getElementById('Date');
    const tempDate: any = new Date(date.value);

    if (tempDate == 'Invalid Date') {
      this.showToast('Select a Date');
    } else {
      var tempData: any = [];
      for (var item of this.table_data) {
        var itemDate: any = new Date(
          item[this.columnKeyValues[this.selectedColumn]]
        );
        if (itemDate != 'Invalid Date') {
          //console.log(tempDate.getTime(), itemDate.getTime());
          //console.log(tempDate,itemDate);
          if (tempDate.getTime() == itemDate.getTime()) tempData.push(item);
        }
      }
      this.currentTableData = tempData;
    }
  }

  getRangeFiltered(): void {
    const rangeFrom: any = document.getElementById('RangeFrom');
    const rangeTo: any = document.getElementById('RangeTo');
    const tempRangeFrom: any = new Date(rangeFrom.value);
    const tempRangeTo: any = new Date(rangeTo.value);

    if (tempRangeFrom == 'Invalid Date') {
      this.showToast('Select From Date');
    } else if (tempRangeTo == 'Invalid Date') {
      this.showToast('Select To Date');
    } else {
      var tempData: any = [];
      for (var item of this.table_data) {
        var itemDate: any = new Date(
          item[this.columnKeyValues[this.selectedColumn]]
        );
        if (itemDate != 'Invalid Date') {
          //console.log(tempDate.getTime(), itemDate.getTime());
          //console.log(tempDate,itemDate);
          if (
            tempRangeFrom.getTime() < itemDate.getTime() &&
            tempRangeTo.getTime() > itemDate.getTime()
          )
            tempData.push(item);
        }
      }
      this.currentTableData = tempData;
    }
  }
  //////////////////

  // SORT
  sortAscending(): void {
    if (this.selectedColumn == -1) {
      this.showToast('Select a Column');
    } else {
      var columnName = this.columnKeyValues[this.selectedColumn];
      var tempData: any = [];
      if (this.column_data_types[columnName] == 'number') {
        this.currentTableData.sort((a: any, b: any) => {
          return parseInt(a[columnName]) - parseInt(b[columnName]);
        });
      } else if (this.column_data_types[columnName] == 'string') {
      } else if (this.column_data_types[columnName] == 'date') {
        this.currentTableData.sort((a: any, b: any) => {
          const tempA: any = new Date(a[columnName]);
          const tempB: any = new Date(b[columnName]);
          if (tempA == tempB) {
            return 0;
          } else if (tempA == 'Invalid Date') {
            return -1;
          } else if (tempB == 'Invalid Date') {
            return 1;
          } else {
            return tempA - tempB;
          }
        });
      }
      console.log(columnName);
    }
  }
  sortDescending(): void {
    if (this.selectedColumn == -1) {
      this.showToast('Select a Column');
    } else {
      var columnName = this.columnKeyValues[this.selectedColumn];
      var tempData: any = [];
      if (this.column_data_types[columnName] == 'number') {
        this.currentTableData.sort((a: any, b: any) => {
          return parseInt(b[columnName]) - parseInt(a[columnName]);
        });
      } else if (this.column_data_types[columnName] == 'string') {
      } else if (this.column_data_types[columnName] == 'date') {
        this.currentTableData.sort((a: any, b: any) => {
          const tempA: any = new Date(a[columnName]);
          const tempB: any = new Date(b[columnName]);
          console.log(`|${tempA}|${tempB}|`);
          if (tempA == tempB) {
            return 0;
          } else if (tempA == 'Invalid Date') {
            return 1;
          } else if (tempB == 'Invalid Date') {
            return -1;
          } else {
            return tempB - tempA;
          }
        });
      }
      console.log(columnName);
    }
  }
  ////////
  // EXPORT
  exportToExcel(): void {
    var table_elt = document.getElementById('tableXLSX');
    var workbook = utils.table_to_book(table_elt);
    var ws = workbook.Sheets['Sheet1'];
    utils.sheet_add_aoa(ws, [['Created ' + new Date().toISOString()]], {
      origin: -1,
    });
    writeFile(workbook, `${this.page_name}.xlsx`);
  }
  //////////
  // RESET
  onReset(): void {
    this.currentTableData = this.table_data;
    this.toggleSearch = false;
    this.toggleFilter = false;
  }
  //////////
  counter(size: any): any {
    console.log(size);
    // const tempArray=[];
    console.log(new Array(parseInt(size)).keys());
    // console.log(tempArray);
    // return tempArray;
    return [1, 2];
  }
  changeCurrentPage(page: number): void {
    this.current_page = page;
  }
  goLeftPage(pageNo:any): void {
    var tempPageNo=parseInt(pageNo);
    this.current_page-=1;
    if(this.current_page==0)
      this.current_page=tempPageNo;
  }
  goRightPage(pageNo:any): void {
    var tempPageNo=parseInt(pageNo);
    this.current_page+=1;
    if(this.current_page>tempPageNo)
      this.current_page=1;
  }
  checkShowPage(rowNo:any):boolean{
    var tempRowNo=parseInt(rowNo)+1;
    console.log(tempRowNo,this.current_page);
    if(tempRowNo==this.current_page)
      return true;
    else
      return false;
  }
  sendToOpenModal(rowData: any): void {
    this.display_modal.emit(rowData);
  }
  showToast(msg: string): void {
    this.toaster.error(msg, '', {
      timeOut: 1500,
      onActivateTick: false,
      progressBar: false,
    });
  }
}

// TODO:
// CHECK DATE FILTERS
// CHECK ZEBRA STYLING IN TABLE
// CHECK DOWNLOAD USING PAGINANTION
// CHANGE PAGINATION NO
// ADD SORT FOR TIME
