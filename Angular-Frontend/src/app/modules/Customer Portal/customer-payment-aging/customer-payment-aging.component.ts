import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-payment-aging',
  templateUrl: './customer-payment-aging.component.html',
  styleUrls: ['./customer-payment-aging.component.css'],
})
export class CustomerPaymentAgingComponent implements OnInit {
  modalTitle = 'Payment and Aging DETAILS';
  modalToggle = false;
  modalData = {};
  PaymentAgingList = {};
  loadingScreenToggle: boolean = true;
  customerDetails: any = {};
  columnValues = {
    COMP_CODE: '',
    CUSTOMER: '',
    ALLOC_NMBR: '',
    FISC_YEAR: '',
    ITEM_NUM: '',
    ENTRY_DATE: '',
    CURRENCY: '',
    LOC_CURRCY: '',
  };
  commonStyleValues:any=CommonValues;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerDetails = this.customerService.getCustomerDetails();
    // ID: "0000000012"\
    console.log('Customer Details', this.customerDetails);
    this.customerService.getPaymentAging(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data.IT_LINEITEM != '') {
          this.PaymentAgingList = responseData.data.IT_LINEITEM.item;
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Payment Aging data', this.PaymentAgingList);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    console.log('Payment Aging Data', this.PaymentAgingList);
  }
  toDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
