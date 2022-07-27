import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CommonValues from '../Employee-CommonValues.json';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  cardImage: any = {
    payroll: 'Employee/Payroll.jpg',
    leaveData: 'Employee/Leave Data.jpg',
  };
  cardOverlayColor: any = {
    payroll: 'rgba(37, 132, 105, 0.7)',
    leaveData: 'rgba(37, 132, 105, 0.7)',
  };
  cardName: string[] = ['Payroll', 'Leave Data'];
  commonStyleValues: any = CommonValues;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToPayroll(): void {
    this.router.navigate(['/payroll']);
  }
  goToLeaveData(): void {
    this.router.navigate(['/leavedata']);
  }
}
