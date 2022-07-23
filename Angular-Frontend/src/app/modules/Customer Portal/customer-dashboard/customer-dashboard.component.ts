import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToInquiry(): void {
    this.router.navigate(['/inquiry']);
  }
  goToSaleOrder(): void {this.router.navigate(['/saleorder']);}
  goToDelivery(): void {}
  goToFinancialSheet(): void {}
}
