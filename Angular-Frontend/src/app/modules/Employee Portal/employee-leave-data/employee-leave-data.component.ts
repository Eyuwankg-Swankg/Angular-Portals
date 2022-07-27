import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import CommonValues from '../Employee-CommonValues.json';
@Component({
  selector: 'app-employee-leave-data',
  templateUrl: './employee-leave-data.component.html',
  styleUrls: ['./employee-leave-data.component.css'],
})
export class EmployeeLeaveDataComponent implements OnInit {
  modalTitle = 'LEAVE DATA DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  LeaveData = [];
  columnValues = {
    ABSENCEDAYS: '',
    ABSENCEHOURS: '',
    EMPLOYEENO: '',
    NAMEOFABSENCETYPE: '',
    VALIDBEGIN: '',
    VALIDEND: '',
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
    this.employeeService.getLeaveData(this.employeeDetails).subscribe(
      (responseData) => {
        this.LeaveData = responseData.data;
        if (responseData.data.LeaveDataDetails != '') {
          this.LeaveData = responseData.data.LeaveDataDetails;
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
  downloadPaySlip(): void {
    console.log("ewfewf");
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.employeeService
      .getPaySlip(this.employeeDetails)
      .subscribe((responseData) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log(responseData.data);
      },(error)=>{ this.loadingScreenToggle = !this.loadingScreenToggle;});
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
