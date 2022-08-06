import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Customer-CommonValues.json';
import invoiceDetailsTableHead from "./Customer-Invoice-Headers"
@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.css'],
})
export class CustomerInvoiceComponent implements OnInit {
  modalTitle = 'INVOICE DETAILS';
  modalToggle = false;
  modalData :any = {};
  loadingScreenToggle: boolean = true;
  noDataToggle: boolean = true;
  customerDetails: any = {};
  InvoiceList = [];
  columnValues :any= {
    MANDT: '',
    VBELN: '',
    FKDAT: '',
    NETWR: '',
  };
  columnDataType: any = {
    MANDT: 'number',
    VBELN: 'number',
    FKDAT: 'date',
    NETWR: 'number',
  };
  commonStyleValues:any=CommonValues;
  modalDataHeader: any = invoiceDetailsTableHead;
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
    this.customerService.getInvoiceData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data != "NO DATA") {
          this.InvoiceList = responseData.data;
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
        console.log('Invoice List', this.InvoiceList);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    console.log('Invoice Data', this.InvoiceList);
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
  downloadPaySlip(): void {
    console.log('PDF !!!');
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.customerDetails = this.customerService.getCustomerDetails();
    // ID: "3"\
    console.log(this.modalData.VBELN);
    console.log('Employee Details', this.customerDetails);
    this.customerService
      .getInvoicePDF({
        ...this.customerDetails,
        sales_no: this.modalData.VBELN,
      })
      .subscribe(
        (responseData) => {
          console.log('CUSTOMER INVOICE', responseData.data.PDFDownloadURL);
          this.loadingScreenToggle = !this.loadingScreenToggle;
          var pdf = `data:application/pdf;base64,${responseData.data.PDFDownloadURL}`;
          var link = document.createElement('a');
          link.href = pdf;
          link.download = 'Invoice.pdf';
          link.click();
        },
        (error) => {
          this.loadingScreenToggle = !this.loadingScreenToggle;
        }
      );
  }
}