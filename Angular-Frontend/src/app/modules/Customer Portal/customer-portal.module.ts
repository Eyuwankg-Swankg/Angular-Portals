import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component'
import { SharedModule } from '../components/shared.module';
import { CustomerInquiryComponent } from './customer-inquiry/customer-inquiry.component';
import { CustomerSaleorderComponent } from './customer-saleorder/customer-saleorder.component';
import { CustomerDeliveryComponent } from './customer-delivery/customer-delivery.component';
import { CustomerFinancialSheetComponent } from './customer-financial-sheet/customer-financial-sheet.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { CustomerPaymentAgingComponent } from './customer-payment-aging/customer-payment-aging.component';
import { CustomerOverallSalesComponent } from './customer-overall-sales/customer-overall-sales.component';
import { CustomerCreditDebitComponent } from './customer-credit-debit/customer-credit-debit.component';

@NgModule({
  declarations: [CustomerLoginComponent, CustomerDashboardComponent, CustomerInquiryComponent, CustomerSaleorderComponent, CustomerDeliveryComponent, CustomerFinancialSheetComponent, CustomerInvoiceComponent, CustomerPaymentAgingComponent , CustomerOverallSalesComponent, CustomerCreditDebitComponent],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    SharedModule
  ],
})
export class CustomerPortalModule {}
