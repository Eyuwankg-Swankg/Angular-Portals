import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Customer-CommonValues.json';
import customerSalesDataTableHead from './Customer-SaleOrder-Headers';
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
  // TODO: NEW ADDITION
  noDataToggle: boolean = true;
  //
  columnValues: any = {
    SD_DOC: '',
    SHORT_TEXT:"",
    REQ_QTY: '',
    REQ_DATE: '',
    NET_VAL_HD:""
  };
  // TODO: NEW ADDITION
  columnDataType: any = {
    SD_DOC: 'number',
    SHORT_TEXT:"string",
    REQ_QTY: 'number',
    REQ_DATE: 'date',
    NET_VAL_HD:"number"
  };
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = customerSalesDataTableHead;
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
    this.customerService.getSaleOrderData(this.customerDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.saleOrderData = responseData.data;
          // TODO: NEW ADDITION
          this.noDataToggle = false;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        console.log('Sale Order Data', this.saleOrderData);
        this.loadingScreenToggle = !this.loadingScreenToggle;
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
  }
  toDashboard(): void {
    this.router.navigate(['customer/dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
