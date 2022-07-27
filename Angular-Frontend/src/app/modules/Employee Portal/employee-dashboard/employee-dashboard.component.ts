import { Component, OnInit } from '@angular/core';
import CommonValues from '../Employee-CommonValues.json';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  commonStyleValues:any = CommonValues;
  constructor() {}

  ngOnInit(): void {}
}
