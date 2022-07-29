import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-purchase-order',
  templateUrl: './vendor-purchase-order.component.html',
  styleUrls: ['./vendor-purchase-order.component.css'],
})
export class VendorPurchaseOrderComponent implements OnInit {
  modalTitle = 'PURCHASE ORDER DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  PurchaseOrder = [];
  columnValues = {
    EBELN: '',
    MANDT: '',
    AEDAT: '',
    BEDAT: '',
    ERNAM: '',
    SUBMI: '',
    WAERS: '',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  constructor(private vendorService: VendorService,private toaster: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log('Vendor Details', this.vendorDetails);
    this.vendorService.getQuoteRequest(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.PurchaseOrder = responseData.data;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Quote Request List', this.PurchaseOrder);
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
