import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '..//Vendor-CommonValues.json';
import vendorCreditDebitDemoTableHead from "../vendor-credit/Vendor-Credit"
@Component({
  selector: 'app-vendor-debit',
  templateUrl: './vendor-debit.component.html',
  styleUrls: ['./vendor-debit.component.css']
})
export class VendorDebitComponent implements OnInit {
  modalTitle = 'DEBIT DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  noDataToggle: boolean = true;
  modalData = {};
  DebitList = [];
  columnValues : any = {
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
  }
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
    this.vendorService.getDebitList(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.DebitList = responseData.data;
          this.noDataToggle = false;
        }
        else{
          this.toaster.error('NO DATA', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle = !this.loadingScreenToggle;
        console.log('Debit List', this.DebitList);
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
