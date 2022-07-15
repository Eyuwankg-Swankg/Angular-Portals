import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  login_image_url:string='assets/Images/Customer/Customer-Login.png';
  customer_portal:string='Customer';
  constructor() { }

  ngOnInit(): void {
  }

}
