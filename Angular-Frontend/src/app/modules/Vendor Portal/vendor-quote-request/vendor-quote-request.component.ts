import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
import vendorRequestForQuotationTableHead from "./Vendor-Quote-Request"
@Component({
  selector: 'app-vendor-quote-request',
  templateUrl: './vendor-quote-request.component.html',
  styleUrls: ['./vendor-quote-request.component.css'],
})
export class VendorQuoteRequestComponent implements OnInit {
  modalTitle = 'QUOTE REQUEST DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  QuoteRequest = [];
  columnValues :any = {
    MANDT:"",
    EBELN:"",
    BUKRS:"",
    AEDAT: '',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = vendorRequestForQuotationTableHead;
 
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
    this.vendorService.getQuoteRequest(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.QuoteRequest = responseData.data;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Quote Request List', this.QuoteRequest);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
  }
  toDashboard(): void {
    this.router.navigate(['vendor/dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
