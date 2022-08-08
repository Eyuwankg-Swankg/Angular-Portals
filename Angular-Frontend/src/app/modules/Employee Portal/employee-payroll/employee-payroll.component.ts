import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Employee-CommonValues.json';
import employeePaySlipTableHead from "./Employee-Payroll"
@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css'],
})
export class EmployeePayrollComponent implements OnInit {
  modalTitle = 'PAYROLL DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData: any = {};
  PayrollData = [];
  columnValues :any = {
    SEQUENCENUMBER:"",
    PAYTYPE_TEXT: '',
    FPBEGIN:"",
    PAYDATE: '',  
    PAYID:"",
  };
  columnDataType: any = {
    FPBEGIN:"date",
    PAYDATE: 'date',
    PAYTYPE_TEXT: 'string',
    SEQUENCENUMBER: 'number',
  }
  employeeDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = employeePaySlipTableHead;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    for (var key in this.columnValues) {
      this.columnValues[key] = this.modalDataHeader[key];
    }
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.employeeDetails = this.employeeService.getEmployeeDetails();
    // ID: "3"\
    console.log('Employee Details', this.employeeDetails);
    this.employeeService.getPayrollData(this.employeeDetails).subscribe(
      (responseData) => {
        if (responseData.data.PayrollDetails != '') {
          this.PayrollData = responseData.data.PayrollDetails;
          this.noDataToggle = false;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
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
    this.router.navigate(['employee/dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
  downloadPaySlip(): void {
    console.log('PDF !!!');
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.employeeDetails = this.employeeService.getEmployeeDetails();
    // ID: "3"\
    console.log(this.modalData.SEQUENCENUMBER);
    console.log('Employee Details', this.employeeDetails);
    this.employeeService
      .getPaySlip({
        ...this.employeeDetails,
        sequence_no: this.modalData.SEQUENCENUMBER,
      })
      .subscribe(
        (responseData) => {
          console.log('Payslip', responseData.data.PDFDownloadURL);
          this.loadingScreenToggle = !this.loadingScreenToggle;
          var pdf = `data:application/pdf;base64,${responseData.data.PDFDownloadURL}`;
          var link = document.createElement('a');
          link.href = pdf;
          link.download = 'Payslip.pdf';
          link.click();
        },
        (error) => {
          this.loadingScreenToggle = !this.loadingScreenToggle;
        }
      );
  }
}
