import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
import vendorPurchaseOrderTableHead from './Vendor-Purchase-Order';
@Component({
  selector: 'app-vendor-purchase-order',
  templateUrl: './vendor-purchase-order.component.html',
  styleUrls: ['./vendor-purchase-order.component.css'],
})
export class VendorPurchaseOrderComponent implements OnInit {
  modalTitle = 'PURCHASE ORDER DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData = {};
  PurchaseOrder = [];
  columnValues = {
    PO_NUMBER: 'Purchase Document No',
    SHORT_TEXT: 'Description',
    INFO_REC: 'Purchase Info Record',
    DISP_QUAN: 'Display quantity',
    NET_PRICE: 'Net price',
  };
  columnDataType: any = {
    PO_NUMBER: 'number',
    SHORT_TEXT: 'string',
    INFO_REC:"number",
    DISP_QUAN:"number",
    NET_PRICE: 'number',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader = vendorPurchaseOrderTableHead;
  constructor(
    private vendorService: VendorService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log('Vendor Details', this.vendorDetails);
    this.vendorService.getPurchaseOrder(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.PurchaseOrder = responseData.data;
          this.noDataToggle = false;
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
