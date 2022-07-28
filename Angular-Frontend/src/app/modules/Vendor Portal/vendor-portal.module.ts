import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import {VendorPortalRoutingModule} from "./vendor-portal-routing.module"
import { SharedModule } from '../components/shared.module';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorQuoteRequestComponent } from './vendor-quote-request/vendor-quote-request.component';
import { VendorPurchaseOrderComponent } from './vendor-purchase-order/vendor-purchase-order.component';
import { VendorGoodsReceiptComponent } from './vendor-goods-receipt/vendor-goods-receipt.component';
import { VendorFinancialSheetComponent } from './vendor-financial-sheet/vendor-financial-sheet.component';
import { VendorInvoiceListComponent } from './vendor-invoice-list/vendor-invoice-list.component';
import { VendorPaymentAgingComponent } from './vendor-payment-aging/vendor-payment-aging.component';
import { VendorCreditComponent } from './vendor-credit/vendor-credit.component';
import { VendorDebitComponent } from './vendor-debit/vendor-debit.component';

@NgModule({
  declarations: [
    VendorLoginComponent,
    VendorDashboardComponent,
    VendorQuoteRequestComponent,
    VendorPurchaseOrderComponent,
    VendorGoodsReceiptComponent,
    VendorFinancialSheetComponent,
    VendorInvoiceListComponent,
    VendorPaymentAgingComponent,
    VendorCreditComponent,
    VendorDebitComponent
  ],
  imports: [
    CommonModule,VendorPortalRoutingModule,SharedModule
  ]
})
export class VendorPortalModule { }
