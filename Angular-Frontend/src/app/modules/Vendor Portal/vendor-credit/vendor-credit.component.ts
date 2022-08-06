import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import CommonValues from '../Vendor-CommonValues.json';
import vendorCreditDebitDemoTableHead from "./Vendor-Credit"
@Component({
  selector: 'app-vendor-credit',
  templateUrl: './vendor-credit.component.html',
  styleUrls: ['./vendor-credit.component.css'],
})
export class VendorCreditComponent implements OnInit {
  modalTitle = 'CREDIT DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData = {};
  CreditList = [];
  columnValues :any = {
    VENDOR: '',
    AMOUNT: '',
    ENTRY_DATE: '',
    DOC_NO: '',
  };
  columnDataType: any = {
    VENDOR: 'string',
    AMOUNT: 'number',
    ENTRY_DATE: 'date',
    DOC_NO: 'number',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  modalDataHeader: any = vendorCreditDebitDemoTableHead;
 
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
    this.vendorService.getCreditList(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.CreditList = responseData.data;
          this.noDataToggle = false;
        }else{
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
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
