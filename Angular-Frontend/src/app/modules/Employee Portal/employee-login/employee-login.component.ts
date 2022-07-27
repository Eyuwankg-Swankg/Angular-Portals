import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css'],
})
export class EmployeeLoginComponent implements OnInit {
  login_image_url: string = 'assets/Images/Employee/Employee-Login2.jpg';
  employee_portal: string = 'Employee';
  employee_login_styles = {
    'login-box-container': ['employee-login-box-container'],
    'login-box': ['employee-login-box'],
    'login-btn': ['employee-login-btn'],
    'login-back-button': ['employee-login-back-button'],
  };
  employee_btn_styles = ['#248c8e', 'rgba(36, 140, 142, 0.58)'];
  constructor(
    private employeeService: EmployeeService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendLoginData(login_data: any): void {
    this.employeeService
      .makeLoginRequest(login_data)
      .subscribe((responseData) => {
        console.log(login_data);
        // ID: "3"
        if ((responseData.data.RESULT[0] == 'SUCCESS')) {
          this.router.navigate(['dashboard']);
        } else {
          this.toaster.error(responseData.data.RESULT[0], '', {
            timeOut: 2000,
            onActivateTick: false,
            progressBar: false,
          });
        }
      });
  }
}
