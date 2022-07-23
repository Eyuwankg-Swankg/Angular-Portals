import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import CommonValues from '../Customer-CommonValues.json';
@Component({
  selector: 'app-customer-delivery',
  templateUrl: './customer-delivery.component.html',
  styleUrls: ['./customer-delivery.component.css'],
})
export class CustomerDeliveryComponent implements OnInit {
  modalTitle = 'DELIVERY DETAILS';
  modalToggle = false;
  modalData = {};
  loadingScreenToggle: boolean = true;
  DeliveryList = [];
  customerDetails: any = {};
  columnValues = {
    MANDT: '',
    VBELN: '',
    ERNAM: '',
    ERZET: '',
    ERDAT: '',
    BZIRK: '',
    VSTEL: '',
    VKORG: '',
  };
  modalStyleClass = CommonValues.modalStyleClass;
  tableStyleClass = CommonValues.tableStyleClass;
  breadCrumbStyleClass = CommonValues.breadCrumbStyleClass;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerDetails = this.customerService.getCustomerDetails();
    // ID: "0000000012"\
    console.log('Customer Details', this.customerDetails);
    this.customerService.getDeliveryData(this.customerDetails).subscribe(
      (responseData) => {
        console.log('Delivery Data', responseData);
        this.DeliveryList = responseData.data.RESULT_DELIVERY_ITEM.item;
        this.loadingScreenToggle = !this.loadingScreenToggle;
      },
      (error) => {
        this.loadingScreenToggle = !this.loadingScreenToggle;
      }
    );
    console.log('Delivery List Data', this.DeliveryList);
  }
  toDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  showModal(rowData: any): void {
    this.modalToggle = !this.modalToggle;
    this.modalData = rowData;
  }
  closeModal(): void {
    this.modalToggle = !this.modalToggle;
  }
}
