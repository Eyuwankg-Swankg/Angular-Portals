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
import {VendorAuthGuardGuard} from "./vendor-auth-guard.guard"

const routes:Routes =[
  {
    path:'',component:VendorLoginComponent
  },
  {
    path:'dashboard',component:VendorDashboardComponent,
    canActivate:[VendorAuthGuardGuard]
  },
  {
    path:'quoterequest',component:VendorQuoteRequestComponent
    ,canActivate:[VendorAuthGuardGuard]
  },
  {
    path:'purchaseorder',component:VendorPurchaseOrderComponent,
    canActivate:[VendorAuthGuardGuard]
  },
  {
    path:'goodsreceipt',component:VendorGoodsReceiptComponent,
    canActivate:[VendorAuthGuardGuard]
  }
  ,
  {
    path:'financialsheet',component:VendorFinancialSheetComponent,
    canActivate:[VendorAuthGuardGuard]
  }
  ,
  {
    path:'credit',component:VendorCreditComponent,
    canActivate:[VendorAuthGuardGuard]
  }
  ,
  {
    path:'debit',component:VendorDebitComponent,
    canActivate:[VendorAuthGuardGuard]
  }
  ,
  {
    path:'paymentaging',component:VendorPaymentAgingComponent,
    canActivate:[VendorAuthGuardGuard]
  }
  ,
  {
    path:'invoicelist',component:VendorInvoiceListComponent,
    canActivate:[VendorAuthGuardGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class VendorPortalRoutingModule { }
