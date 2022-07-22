import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  @Input() table_data:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
