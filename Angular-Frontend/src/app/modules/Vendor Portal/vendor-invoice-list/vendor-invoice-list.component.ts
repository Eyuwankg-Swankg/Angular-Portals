import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-invoice-list',
  templateUrl: './vendor-invoice-list.component.html',
  styleUrls: ['./vendor-invoice-list.component.css'],
})
export class VendorInvoiceListComponent implements OnInit {
  modalTitle = 'INVOICE DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  InvoiceList = [];
  columnValues = {
    DIFF_INV: '',
    INV_DOC_NO: '',
    DOC_DATE: '',
    FISC_YEAR: '',
    GROSS_AMNT: '',
    INVOICE_STATUS: '',
    COMP_CODE: '',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  constructor(private vendorService: VendorService,private toaster: ToastrService,  private router: Router) {}

  ngOnInit(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log('Vendor Details', this.vendorDetails);
    this.vendorService.getInvoiceList(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.InvoiceList = responseData.data;
        }  else{
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
}
