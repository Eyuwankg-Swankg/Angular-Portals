import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.css'],
})
export class CustomerInvoiceComponent implements OnInit {
  modalTitle = 'INVOICE DETAILS';
  modalToggle = false;
  modalData = {};
  loadingScreenToggle: boolean = true;
  customerDetails: any = {};
  InvoiceList = [];
  columnValues = {
    MANDT: '',
    VBELN: '',
    FKART: '',
    FKTYP: '',
    VBTYP: '',
    WAERK: '',
    VKORG: '',
    VTWEG: '',
    KALSM: '',
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
    this.customerService.getInvoiceData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data.IT_INVOICE_LIST != "") {
          this.InvoiceList = responseData.data.IT_INVOICE_LIST.item;
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Invoice List', this.InvoiceList);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    console.log('Invoice Data', this.InvoiceList);
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
