import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  login_image_url: string = 'assets/Images/Customer/Customer-Login.png';
  customer_portal: string = 'Customer';
  customer_login_styles = {
    'login-box-container': ['customer-login-box-container'],
    'login-box': ['customer-login-box'],
    'login-btn': ['customer-login-btn'],
    'login-back-button': ['customer-login-back-button'],
    'login-btn-valid':['customer-login-btn-valid'],
    'login-btn-invalid':['customer-login-btn-invalid'],
  };
  customer_btn_styles=["#20346e","rgba(32, 52, 110, 0.56)"]
  constructor(
    private customerService: CustomerService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendLoginData(login_data: any): void {
    this.customerService
      .makeLoginRequest(login_data)
      .subscribe((responseData) => {
        console.log(responseData);
        // ID: "0000000012"
        if (responseData.RESULT == 'SUCCESS') {
          this.router.navigate(['dashboard']);
        } else {
          this.toaster.error(responseData.RESULT, '', {
            timeOut: 2000,
            onActivateTick: false,
            progressBar: false,
          });
        }
      });
  }
}
