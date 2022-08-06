import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Vendor-CommonValues.json';
import vendorPaymentAndAgingTableHead from "./Vendor-Payment-Aging";
@Component({
  selector: 'app-vendor-payment-aging',
  templateUrl: './vendor-payment-aging.component.html',
  styleUrls: ['./vendor-payment-aging.component.css'],
})
export class VendorPaymentAgingComponent implements OnInit {
  modalTitle = 'Payment Aging Details';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData = {};
  PaymentAging = [];
  columnValues :any = {
    VENDOR: '',
    DOC_NO: '',
    AMOUNT: '',
    ENTRY_DATE: '',
  };
  columnDataType: any = {
    VENDOR: 'string',
    AMOUNT: 'number',
    DOC_NO: 'number',
    ENTRY_DATE: 'date',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = vendorPaymentAndAgingTableHead;
 
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
    this.vendorService.getPaymentAging(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.PaymentAging = responseData.data;
          this.noDataToggle = false;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Payment Aging List', this.PaymentAging);
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
