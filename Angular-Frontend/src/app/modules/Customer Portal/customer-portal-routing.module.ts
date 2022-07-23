import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerInquiryComponent } from './customer-inquiry/customer-inquiry.component';
import { CustomerSaleorderComponent } from './customer-saleorder/customer-saleorder.component';
import { CustomerDeliveryComponent } from './customer-delivery/customer-delivery.component';
import { CustomerFinancialSheetComponent } from './customer-financial-sheet/customer-financial-sheet.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerPaymentAgingComponent } from './customer-payment-aging/customer-payment-aging.component';

const routes: Routes = [
  {
    path: 'l',
    component: CustomerLoginComponent,
  },
  {
    path: '',
    component: CustomerDashboardComponent,
  },
  {
    path: 'inquiry',
    component: CustomerInquiryComponent,
  },
  {
    path: 'saleorder',
    component: CustomerSaleorderComponent,
  },
  {
    path: 'delivery',
    component: CustomerDeliveryComponent,
  },
  {
    path: 'financialsheet',
    component: CustomerFinancialSheetComponent,
  },
  {
    path: 'invoice',
    component: CustomerInvoiceComponent,
  },
  {
    path: 'paymentaging',
    component: CustomerPaymentAgingComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPortalRoutingModule {}
