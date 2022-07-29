import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  cardImage: any = {
    inquiry: 'Customer/inquiry.png',
    saleOrder: 'Customer/inquiry.png',
    delivery: 'Customer/inquiry.png',
    financialSheet: 'Customer/inquiry.png',
  };
  cardOverlayColor: any = {
    inquiry: 'rgba(29, 32, 84, 0.68)',
    saleOrder: 'rgba(29, 32, 84, 0.68)',
    delivery: 'rgba(29, 32, 84, 0.68)',
    financialSheet: 'rgba(29, 32, 84, 0.68)',
  };
  cardName: string[] = ['Inquiry', 'Sale Order', 'Delivery', 'Financial Sheet'];
  commonStyleValues :any = CommonValues;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToInquiry(): void {
    this.router.navigate(['customer/inquiry']);
  }
  goToSaleOrder(): void {
    this.router.navigate(['customer/saleorder']);
  }
  goToDelivery(): void {
    this.router.navigate(['customer/delivery']);
  }
  goToFinancialSheet(): void {
    this.router.navigate(['customer/financialsheet']);
  }
}
