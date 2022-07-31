import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerInquiryComponent } from './customer-inquiry/customer-inquiry.component';
import { CustomerSaleorderComponent } from './customer-saleorder/customer-saleorder.component';
import { CustomerDeliveryComponent } from './customer-delivery/customer-delivery.component';
import { CustomerFinancialSheetComponent } from './customer-financial-sheet/customer-financial-sheet.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerPaymentAgingComponent } from './customer-payment-aging/customer-payment-aging.component';
import { CustomerOverallSalesComponent } from './customer-overall-sales/customer-overall-sales.component';
import { CustomerCreditDebitComponent } from './customer-credit-debit/customer-credit-debit.component';
import { CustomerAuthGuardGuard } from './customer-auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerLoginComponent,
  },
  {
    path: 'dashboard',
    component: CustomerDashboardComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'inquiry',
    component: CustomerInquiryComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'saleorder',
    component: CustomerSaleorderComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'delivery',
    component: CustomerDeliveryComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'financialsheet',
    component: CustomerFinancialSheetComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'invoice',
    component: CustomerInvoiceComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'paymentaging',
    component: CustomerPaymentAgingComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'creditdebit',
    component: CustomerCreditDebitComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
  {
    path: 'overallsales',
    component: CustomerOverallSalesComponent,
    canActivate: [CustomerAuthGuardGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPortalRoutingModule {}
