import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-goods-receipt',
  templateUrl: './vendor-goods-receipt.component.html',
  styleUrls: ['./vendor-goods-receipt.component.css'],
})
export class VendorGoodsReceiptComponent implements OnInit {
  modalTitle = 'GOODS RECEIPT DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  GoodsReceipt = [];
  columnValues = {
    VENDOR: '',
    PO_NUMBER: '',
    MATERIAL: '',
    MAT_DOC: '',
    DOC_YEAR: '',
    MOVE_REAS: '',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
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
    this.vendorService.getGoodsReceipt(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.GoodsReceipt = responseData.data;
        } else {
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Goods Receipt List', this.GoodsReceipt);
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
