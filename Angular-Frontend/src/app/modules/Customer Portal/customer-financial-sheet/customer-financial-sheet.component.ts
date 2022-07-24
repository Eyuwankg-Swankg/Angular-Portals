import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-financial-sheet',
  templateUrl: './customer-financial-sheet.component.html',
  styleUrls: ['./customer-financial-sheet.component.css'],
})
export class CustomerFinancialSheetComponent implements OnInit {
  cardImage: any = {
    invoice: 'Customer/inquiry.png',
    paymentaging: 'Customer/inquiry.png',
    creditdebit: 'Customer/inquiry.png',
    salesdata: 'Customer/inquiry.png',
  };
  cardOverlayColor: any = {
    invoice: 'rgba(29, 32, 84, 0.68)',
    paymentaging: 'rgba(29, 32, 84, 0.68)',
    creditdebit: 'rgba(29, 32, 84, 0.68)',
    salesdata: 'rgba(29, 32, 84, 0.68)',
  };
  cardName: string[] = [
    'Invoice',
    'Payment and Aging',
    'Credit Debit memo',
    'Overall Sales',
  ];
  breadCrumbStyleClass = CommonValues.breadCrumbStyleClass;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  toDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  goToInvoice(): void {
    this.router.navigate(['invoice']);
  }
  goToPaymentAging(): void {
    this.router.navigate(['paymentaging']);
  }
  goToCreditDebit(): void {
    this.router.navigate(['creditdebit']);
  }
  goToSalesData(): void {
    this.router.navigate(['overallsales']);
  }
}
