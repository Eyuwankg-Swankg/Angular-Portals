import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
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
  columnValues = {
    AEDAT: '',
    ANGDT: '',
    EKGRP: '',
    ERNAM: '',
    INCO2: '',
    INCO1: '',
    WAERS: '',
    KUNNR: '',
  };
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
          this.QuoteRequest = responseData.data;
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
