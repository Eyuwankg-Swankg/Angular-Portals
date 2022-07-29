import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css'],
})
export class VendorLoginComponent implements OnInit {
  login_image_url: string = 'assets/Images/Vendor/Vendor-Login.jpg';
  vendor_portal: string = 'Vendor';
  vendor_login_styles = {
    'login-box-container': ['vendor-login-box-container'],
    'login-box': ['vendor-login-box'],
    'login-btn': ['vendor-login-btn'],
    'login-back-button': ['vendor-login-back-button'],
  };
  vendor_btn_styles = ['#d9728e', 'rgba(217, 114, 142,0.47)'];
  constructor(
    private vendorService: VendorService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  sendLoginData(login_data: any): void {
    this.vendorService
      .makeLoginRequest(login_data)
      .subscribe((responseData) => {
        // UserID
        // ID: "3"
        if ((responseData.data.RESULT[0] == 'SUCCESS')) {
          this.vendorService.setVendorDetails(responseData.data.CUSTOMER_ID[0]);
          this.vendorService.getVendorDetails();
          this.router.navigate(['vendor/dashboard']);
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
