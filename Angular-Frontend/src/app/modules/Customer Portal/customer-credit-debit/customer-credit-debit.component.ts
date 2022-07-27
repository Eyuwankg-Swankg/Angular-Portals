import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
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
  loadingScreenToggleCredit: boolean = true;
  loadingScreenToggleDebit: boolean = true;
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
  commonStyleValues :any= CommonValues;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.customerDetails = this.customerService.getCustomerDetails();
    // ID: "0000000012"\
    console.log('Customer Details', this.customerDetails);
    // CREDIT LIST
    this.customerService.getCreditData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data.RETURN.TYPE == '') {
          this.CreditList = responseData.data.IT_CREDIT_RESULT.item;
        }
        this.loadingScreenToggleCredit = !this.loadingScreenToggleCredit;
        console.log('Credit List', this.CreditList);
      },
      (error) => {
        this.loadingScreenToggleCredit = !this.loadingScreenToggleCredit;
      }
    );
    // DEBIT LIST
    this.customerService.getDebitData(this.customerDetails).subscribe(
      (responseData) => {
        if (responseData.data.RETURN.TYPE == '') {
          this.DebitList = responseData.data.IT_DEBIT_RESULT.item;
        }
        this.loadingScreenToggleDebit = !this.loadingScreenToggleDebit;
        console.log('Debit List', this.DebitList);
      },
      (error) => {
        this.loadingScreenToggleDebit = !this.loadingScreenToggleDebit;
      }
    );
    console.log('Credit Data', this.CreditList);
    console.log('Debit Data', this.DebitList);
  }
  changeCrdeitDebitToggle(): void {
    this.toggleCreditDebit = !this.toggleCreditDebit;
  }
  toDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalTitle = this.toggleCreditDebit ? 'CREDIT MEMO DETAILS' : 'DEBIT MEMO DETAILS' ;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
