import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-credit-debit',
  templateUrl: './customer-credit-debit.component.html',
  styleUrls: ['./customer-credit-debit.component.css'],
})
export class CustomerCreditDebitComponent implements OnInit {
  modalTitle = '';
  modalToggle = false;
  modalData = {};
  CreditList = {};
  DebitList = {};
  loadingScreenToggle: boolean = true;
  toggleCreditDebit: boolean = true;
  customerDetails: any = {};
  columnValuesCredit = {
    ALLOC_NMBR: '',
    AMOUNT: '',
    AMT_DOCCUR: '',
    BILL_DOC: '',
    BLINE_DATE: '',
    TAX_CODE: '',
    OBJ_TYPE: '',
  };
  columnValuesDebit = {
    ALLOC_NMBR: '',
    AMOUNT: '',
    AMT_DOCCUR: '',
    BILL_DOC: '',
    DISC_BASE: '',
    DOC_DATE: '',
    OBJ_TYPE: '',
  };
  commonStyleValues: any = CommonValues;
  constructor(
    private customerService: CustomerService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.customerDetails = this.customerService.getCustomerDetails();
    // ID: "0000000012"\
    console.log('Customer Details', this.customerDetails);
    // CREDIT LIST
    this.customerService.getCreditData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data != 'NO DATA') {
          this.CreditList = responseData.data;
        } else {
          this.toaster.error('NO CREDIT DATA ', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        this.loadingScreenToggle= !this.loadingScreenToggle;
        console.log('Credit List', this.CreditList);
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    // DEBIT LIST
    this.customerService.getDebitData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data != 'NO DATA') {
          this.DebitList = responseData.data;
        } else {
          this.toaster.error('NO DEBIT DATA ', '', {
            timeOut: 1500,
            onActivateTick: false,
            progressBar: false,
          });
        }
        console.log('Debit List', this.DebitList);
      },
      (error) => {
        console.log("ERROR");
      }
    );
    console.log('Credit Data', this.CreditList);
    console.log('Debit Data', this.DebitList);
  }
  changeCrdeitDebitToggle(): void {
    this.toggleCreditDebit = !this.toggleCreditDebit;
  }
  toDashboard(): void {
    this.router.navigate(['customer/financialsheet']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalTitle = this.toggleCreditDebit
      ? 'CREDIT MEMO DETAILS'
      : 'DEBIT MEMO DETAILS';
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
