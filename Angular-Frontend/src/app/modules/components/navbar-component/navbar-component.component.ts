import { Component, OnInit, Input } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { SharedService } from './../../shared.service';
import {CustomerProfileHeaders} from "./ProfileHeaders";
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  @Input() portal_name = '';
  @Input() style_class: any = {};
  toggleDropdown: boolean = false;
  loadingScreenToggle: boolean = false;
  togglePofileModal: boolean = false;
  profileDetailsHeading: string[] = [];
  profileDetailsValues: any = [];
  loadingClass = '';
  constructor(private router: Router, private service: SharedService) {}

  ngOnInit(): void {
    if (this.portal_name == 'Customer')
      this.loadingClass = 'customer-loading-screeen';
    else if (this.portal_name == 'Employee')
      this.loadingClass = 'employee-loading-screeen';
    else if (this.portal_name == 'Vendor')
      this.loadingClass = 'vendor-loading-screeen';
  }
  showDropdown(): void {
    this.toggleDropdown = !this.toggleDropdown;
  }
  onLogout(): void {
    // CLEAR SESSION OF PORTAL USING portal_name
    this.service.removeLocalStorage(this.portal_name);
    this.router.navigate(['']);
  }
  getProfile(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    if (this.portal_name == 'Customer') {
      this.service
        .getCustomerProfile(this.service.getCustomerDetails())
        .subscribe(
          (responseData) => {
            var temp = responseData.data;
            console.log(temp);
            for (var item in temp) {
              this.profileDetailsHeading.push(item);
              this.profileDetailsValues.push(temp[item]);
            }
            console.log(this.profileDetailsHeading, this.profileDetailsValues);
            this.togglePofileModal = !this.togglePofileModal;
            this.loadingScreenToggle = !this.loadingScreenToggle;
          },
          (error) => {
            this.loadingScreenToggle = !this.loadingScreenToggle;
          }
        );
    } else if (this.portal_name == 'Employee') {
      this.service
        .getEmployeeProfile(this.service.getEmployeeDetails())
        .subscribe(
          (responseData) => {
            var temp = responseData.data;
            console.log(temp);
            for (var item in temp) {
              this.profileDetailsHeading.push(item);
              this.profileDetailsValues.push(temp[item]);
            }
            this.togglePofileModal = !this.togglePofileModal;
            this.loadingScreenToggle = !this.loadingScreenToggle;
          },
          (error) => {
            this.loadingScreenToggle = !this.loadingScreenToggle;
          }
        );
    } else if (this.portal_name == 'Vendor') {
      this.service.getVendorProfile(this.service.getVendorDetails()).subscribe(
        (responseData) => {
          var temp = responseData.data;
          console.log(temp);
          for (var item in temp) {
            this.profileDetailsHeading.push(item);
            this.profileDetailsValues.push(temp[item]);
          }
          this.togglePofileModal = !this.togglePofileModal;
          this.loadingScreenToggle = !this.loadingScreenToggle;
        },
        (error) => {
          this.loadingScreenToggle = !this.loadingScreenToggle;
        }
      );
    }
  }
  closeProfileModal(): void {
    this.togglePofileModal = !this.togglePofileModal;
  }
}
