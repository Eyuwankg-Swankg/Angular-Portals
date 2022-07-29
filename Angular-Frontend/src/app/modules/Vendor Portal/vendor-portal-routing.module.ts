import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import { VendorCreditComponent } from './vendor-credit/vendor-credit.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorDebitComponent } from './vendor-debit/vendor-debit.component';
import { VendorFinancialSheetComponent } from './vendor-financial-sheet/vendor-financial-sheet.component';
import { VendorGoodsReceiptComponent } from './vendor-goods-receipt/vendor-goods-receipt.component';
import { VendorInvoiceListComponent } from './vendor-invoice-list/vendor-invoice-list.component';
import {VendorLoginComponent} from "./vendor-login/vendor-login.component"
import { VendorPaymentAgingComponent } from './vendor-payment-aging/vendor-payment-aging.component';
import { VendorPurchaseOrderComponent } from './vendor-purchase-order/vendor-purchase-order.component';
import { VendorQuoteRequestComponent } from './vendor-quote-request/vendor-quote-request.component';

const routes:Routes =[
  {
    path:'',component:VendorLoginComponent
  },
  {
    path:'dashboard',component:VendorDashboardComponent
  },
  {
    path:'quoterequest',component:VendorQuoteRequestComponent
  },
  {
    path:'purchaseorder',component:VendorPurchaseOrderComponent
  },
  {
    path:'goodsreceipt',component:VendorGoodsReceiptComponent
  }
  ,
  {
    path:'financialsheet',component:VendorFinancialSheetComponent
  }
  ,
  {
    path:'credit',component:VendorCreditComponent
  }
  ,
  {
    path:'debit',component:VendorDebitComponent
  }
  ,
  {
    path:'paymentaging',component:VendorPaymentAgingComponent
  }
  ,
  {
    path:'invoicelist',component:VendorInvoiceListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class VendorPortalRoutingModule { }
