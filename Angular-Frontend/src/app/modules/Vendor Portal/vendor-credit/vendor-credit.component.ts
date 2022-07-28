import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-credit',
  templateUrl: './vendor-credit.component.html',
  styleUrls: ['./vendor-credit.component.css']
})
export class VendorCreditComponent implements OnInit {
  modalTitle = 'CREDIT DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  CreditList = [];
  columnValues = {}
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  constructor(private vendorService: VendorService, private router: Router) {}

  ngOnInit(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log('Vendor Details', this.vendorDetails);
    this.vendorService.getQuoteRequest(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.CreditList = responseData.data;
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Credit List', this.CreditList);
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
