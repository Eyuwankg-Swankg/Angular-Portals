import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import CommonValues from '../Employee-CommonValues.json';
@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css'],
})
export class EmployeePayrollComponent implements OnInit {
  modalTitle = 'PAYROLL DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  PayrollData = [];
  columnValues = {
    BONUSDATE: '',
    FPBEGIN: '',
    FPEND: '',
    FPPERIOD: '',
    PAYDATE: '',
    PAYTYPE_TEXT: '',
    SEQUENCENUMBER: '',
  };
  employeeDetails = {};
  commonStyleValues: any = CommonValues;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.employeeDetails = this.employeeService.getEmployeeDetails();
    // ID: "3"\
    console.log('Employee Details', this.employeeDetails);
    this.employeeService.getPayrollData(this.employeeDetails).subscribe(
      (responseData) => {
        if (responseData.data.PayrollDetails != '') {
          this.PayrollData = responseData.data.PayrollDetails;
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Payroll List', this.PayrollData);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    console.log('Payroll Data');
  }
  toDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
