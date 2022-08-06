import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Vendor-CommonValues.json';
import vendorInvoiceDetailTableHead from './Vendor-Invoice';
@Component({
  selector: 'app-vendor-invoice-list',
  templateUrl: './vendor-invoice-list.component.html',
  styleUrls: ['./vendor-invoice-list.component.css'],
})
export class VendorInvoiceListComponent implements OnInit {
  modalTitle = 'INVOICE DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData :any = {};
  InvoiceList = [];
  columnValues: any = {
    INV_DOC_NO: '',
    GROSS_AMNT: '',
    ENTRY_DATE: '',
    DOC_DATE: '',
  };
  columnDataType: any = {
    ENTRY_DATE: 'date',
    INV_DOC_NO: 'number',
    DOC_DATE: 'date',
    GROSS_AMNT: 'number',
  }
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = vendorInvoiceDetailTableHead;

  constructor(
    private vendorService: VendorService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    for (var key in this.columnValues) {
      this.columnValues[key] = this.modalDataHeader[key];
    }
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log('Vendor Details', this.vendorDetails);
    this.vendorService.getInvoiceList(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.InvoiceList = responseData.data;
          this.noDataToggle = false;
        } else {
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
  }
  toDashboard(): void {
    this.router.navigate(['vendor/financialsheet']);
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
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log(this.modalData);
    this.vendorService
      .getInvoicePDF({
        fisc_year: this.modalData.FISC_YEAR,
        doc_no: this.modalData.INV_DOC_NO,
      })
      .subscribe(
        (responseData) => {
          console.log('VENDOR INVOICE', responseData.data.PDFDownloadURL);
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
    console.log('Vendor Details', this.vendorDetails);
  }
}
