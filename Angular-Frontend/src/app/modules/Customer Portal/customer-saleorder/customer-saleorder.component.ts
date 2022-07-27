import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-saleorder',
  templateUrl: './customer-saleorder.component.html',
  styleUrls: ['./customer-saleorder.component.css'],
})
export class CustomerSaleorderComponent implements OnInit {
  saleOrderData = {};
  customerDetails: any = {};
  loadingScreenToggle: boolean = true;
  modalTitle = 'SALE ORDER DETAILS';
  modalToggle: boolean = false;
  modalData = {};
  columnValues = {
    SD_DOC: '',
    ITM_NUMBER: '',
    MATERIAL: '',
    DOC_TYPE: '',
    DOC_DATE: '',
    REQ_QTY: '',
    REQ_DATE: '',
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
    this.customerService.getSaleOrderData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data.IT_SALES_ORDER != '') {
          if (Array.isArray(responseData.data.IT_SALES_ORDER.item) == false)
            this.saleOrderData = [responseData.data.IT_SALES_ORDER.item];
          else this.saleOrderData = responseData.data.IT_SALES_ORDER.item;
          console.log('Sale Order Data', this.saleOrderData);
          this.loadingScreenToggle = !this.loadingScreenToggle;
        }
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
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
