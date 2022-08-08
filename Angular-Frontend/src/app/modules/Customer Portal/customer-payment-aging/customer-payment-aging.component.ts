import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
import customerPaymentAndAgingTableHead from "./Customer-Payment-Aging"
@Component({
  selector: 'app-customer-payment-aging',
  templateUrl: './customer-payment-aging.component.html',
  styleUrls: ['./customer-payment-aging.component.css'],
})
export class CustomerPaymentAgingComponent implements OnInit {
  modalTitle = 'PAYMENT & AGING DETAILS';
  modalToggle = false;
  modalData = {};
  PaymentAgingList:any = {};
  loadingScreenToggle: boolean = true;
  noDataToggle: boolean = true;
  customerDetails: any = [];
  columnValues :any= {
    CUSTOMER: '',
    AMOUNT: '',
    FISC_YEAR: '',
    ENTRY_DATE: '',
    AGING:""
  };
  columnDataType: any = {
    CUSTOMER: 'number',
    AMOUNT: 'number',
    FISC_YEAR: 'number',
    ENTRY_DATE: 'date',
    AGING:"number"
  };
  commonStyleValues:any=CommonValues;
  modalDataHeader: any = customerPaymentAndAgingTableHead;
  constructor(
    private customerService: CustomerService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    for (var key in this.columnValues) {
      this.columnValues[key] = this.modalDataHeader[key];
    }
    this.customerDetails = this.customerService.getCustomerDetails();
    // ID: "0000000012"\
    console.log('Customer Details', this.customerDetails);
    this.customerService.getPaymentAging(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data!= 'NO DATA') {
          this.PaymentAgingList = responseData.data;
          const currentDate = new Date();
          for (let i = 0; i < this.PaymentAgingList.length; i++) {
            const entryDate: any = new Date(this.PaymentAgingList[i]['ENTRY_DATE']);
            const difference_in_date =
              currentDate.getTime() - entryDate.getTime();
            const difference_in_days: any = Math.trunc(
              difference_in_date / (1000 * 3600 * 24)
            );
            this.PaymentAgingList[i]['AGING'] = `${difference_in_days}`;
          }
          this.noDataToggle = false;
        }
        else{
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
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
    this.router.navigate(['customer/financialsheet']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
