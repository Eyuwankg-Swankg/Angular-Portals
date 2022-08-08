import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Customer-CommonValues.json';
import customerSalesDataTableHead from '../customer-saleorder/Customer-SaleOrder-Headers';
@Component({
  selector: 'app-customer-overall-sales',
  templateUrl: './customer-overall-sales.component.html',
  styleUrls: ['./customer-overall-sales.component.css'],
})
export class CustomerOverallSalesComponent implements OnInit {
  overallSalesData = {};
  customerDetails: any = {};
  loadingScreenToggle: boolean = true;
  modalTitle = 'OVERALL SALES DETAILS';
  modalToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData = {};
  columnValues: any = {
    SD_DOC: '',
    SHORT_TEXT:"",
    REQ_QTY: '',
    REQ_DATE: '',
    NET_VAL_HD:""
  };
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
          this.overallSalesData = responseData.data;
          this.noDataToggle = false;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        console.log('Sale Order Data', this.overallSalesData);
        this.loadingScreenToggle = !this.loadingScreenToggle;
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
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
