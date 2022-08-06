import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Employee-CommonValues.json';
import leaveRequestTableHead from "./Employee-Leave-Data"
@Component({
  selector: 'app-employee-leave-data',
  templateUrl: './employee-leave-data.component.html',
  styleUrls: ['./employee-leave-data.component.css'],
})
export class EmployeeLeaveDataComponent implements OnInit {
  modalTitle = 'LEAVE DATA DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData = {};
  LeaveData = [];
  columnValues :any = {
    EMPLOYEENO: '',
    VALIDBEGIN: '',
    VALIDEND:'',
    ABSENCEDAYS: '',
    NAMEOFABSENCETYPE: '',
  };
  columnDataType: any = {
    EMPLOYEENO: 'number',
    VALIDBEGIN: 'date',
    VALIDEND:'date',
    ABSENCEDAYS: 'number',
    NAMEOFABSENCETYPE: 'string',
  };
  employeeDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = leaveRequestTableHead;
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
    this.employeeService.getLeaveData(this.employeeDetails).subscribe(
      (responseData) => {
        this.LeaveData = responseData.data;
        if (responseData.data.LeaveDataDetails != '') {
          this.LeaveData = responseData.data.LeaveDataDetails;
          this.noDataToggle = false;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Leave List', this.LeaveData);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    console.log('Leave Data');
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
}
