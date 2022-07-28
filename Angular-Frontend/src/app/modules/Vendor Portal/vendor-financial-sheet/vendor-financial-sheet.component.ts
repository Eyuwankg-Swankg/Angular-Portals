import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-financial-sheet',
  templateUrl: './vendor-financial-sheet.component.html',
  styleUrls: ['./vendor-financial-sheet.component.css']
})
export class VendorFinancialSheetComponent implements OnInit {
  cardImage: any = {
    invoiceList: 'Vendor/Quote-Request.png',
    paymentAging: 'Vendor/Purchase-Order.png',
    credit: 'Vendor/Goods-Receipt.png',
    debit: 'Vendor/Financial-Sheet.jpg',
  };
  cardOverlayColor: any = {
    invoiceList: 'rgba(217, 114, 142, 0.85)',
    paymentAging: 'rgba(217, 114, 142, 0.85)',
    credit: 'rgba(217, 114, 142, 0.85)',
    debit: 'rgba(217, 114, 142, 0.85)',
  };
  cardName: string[] = ['Invoice List','Payment Aging','Credit',"Debit"];
  commonStyleValues: any = CommonValues;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToInvoiceList(): void {
    this.router.navigate(['vendor/invoicelist']);
  }
  goToPaymentAging(): void {
    this.router.navigate(['vendor/paymentaging']);
  }
  goToCredit(): void {
    this.router.navigate(['vendor/credit']);
  }
  goToDebit(): void {
    this.router.navigate(['vendor/debit']);
  }
}
