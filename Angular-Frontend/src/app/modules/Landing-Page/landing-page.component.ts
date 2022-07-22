import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  PortalCardImage:any={
    Customer:"Customer/Customer-Card.png",
    Vendor:"Vendor/Vendor-Card.png",
    Employee:"Customer/Customer-Card.png"
  }
  CustomerPortal:string = 'Customer'
  VendorPortal:string = 'Vendor'
  EmployeePortal:string = 'Employee'
  VendorOverlayColor:string = 'rgba(37, 132, 105, 0.75)'
  EmployeeOverlayColor:string = 'rgba(37, 132, 105, 0.75)'
  CustomerOverlayColor:string = 'rgba(29, 32, 84, 0.68)'
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToCustomer(): void{
    this.router.navigate(["/customer"]);
  }
  goToVendor(): void{
    this.router.navigate(["/vendor"]);
  }
  goToEmployee(): void{
    this.router.navigate(["/employee"]);
  }
}

// TODO:
// look for ngStyle