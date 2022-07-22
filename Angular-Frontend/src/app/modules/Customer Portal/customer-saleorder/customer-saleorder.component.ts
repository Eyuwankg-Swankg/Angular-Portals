import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-saleorder',
  templateUrl: './customer-saleorder.component.html',
  styleUrls: ['./customer-saleorder.component.css'],
})
export class CustomerSaleorderComponent implements OnInit {
  saleOrderData={};
  customerDetails = {
    customer_id: '12',
  };
  breadCrumbText = ['Customer', 'Sale Order List'];
  styleClass = ['breadcrumb-border-customer', 'breadcrumb-text-color-customer'];
  tableStyleClass = ['customer-table-row', 'customer-table-heading'];
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // ID: "0000000012"\
    this.customerService
      .getSaleOrderData(this.customerDetails)
      .subscribe((responseData) => {
        // console.log('Sale Order Data', responseData);
         this.saleOrderData = responseData;
         console.log(this.saleOrderData);
      });
  }
  toDashboard(): void {
    this.router.navigate(['dashboard']);
  }
}
