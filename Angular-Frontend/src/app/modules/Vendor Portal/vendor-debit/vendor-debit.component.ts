import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Vendor-CommonValues.json';
@Component({
  selector: 'app-vendor-debit',
  templateUrl: './vendor-debit.component.html',
  styleUrls: ['./vendor-debit.component.css']
})
export class VendorDebitComponent implements OnInit {
  modalTitle = 'DEBIT DETAILS';
  modalToggle = false;
  loadingScreenToggle: boolean = false;
  modalData = {};
  DebitList = [];
  columnValues = {
    VENDOR: '',
    AMOUNT: '',
    BLINE_DATE: '',
    DOC_NO: '',
    REF_DOC: '',
  };
  vendorDetails = {};
  commonStyleValues: any = CommonValues;
  constructor(private vendorService: VendorService,
    private toaster: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.loadingScreenToggle = !this.loadingScreenToggle;
    this.vendorDetails = this.vendorService.getVendorDetails();
    // ID: "3"\
    console.log('Vendor Details', this.vendorDetails);
    this.vendorService.getDebitList(this.vendorDetails).subscribe(
      (responseData) => {
        console.log(responseData.data);
        if (responseData.data != 'NO DATA') {
          this.DebitList = responseData.data;
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
