import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  cardImage: any = {
    quoteRequest: 'Vendor/Quote-Request.png',
    purchaseOrder: 'Vendor/Purchase-Order.png',
    goodsReceipt: 'Vendor/Goods-Receipt.png',
    financialSheet: 'Vendor/Financial-Sheet.jpg',
  };
  cardOverlayColor: any = {
    quoteRequest: 'rgba(217, 114, 142, 0.85)',
    purchaseOrder: 'rgba(217, 114, 142, 0.85)',
    goodsReceipt: 'rgba(217, 114, 142, 0.85)',
    financialSheet: 'rgba(217, 114, 142, 0.85)',
  };
  cardName: string[] = ['Quote Request','Purchase Order','Goods Receipt',"Financial Sheet"];
  commonStyleValues: any = CommonValues;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToQuoteRequest(): void {
    this.router.navigate(['vendor/quoterequest']);
  }
  goToPurchaseOrder(): void {
    this.router.navigate(['vendor/purchaseorder']);
  }
  goToGoodsReceipt(): void {
    this.router.navigate(['vendor/goodsreceipt']);
  }
  goToFinanciaSheet(): void {
    this.router.navigate(['vendor/financialsheet']);
  }
}
