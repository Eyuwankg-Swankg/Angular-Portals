import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customer-inquiry',
  templateUrl: './customer-inquiry.component.html',
  styleUrls: ['./customer-inquiry.component.css'],
})
export class CustomerInquiryComponent implements OnInit {
  InquiryList= [];
  customerDetails = {
    customer_id: '12',
  };
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // ID: "0000000012"
    this.customerService
      .getInquiryData(this.customerDetails)
      .subscribe((responseData) => {
        this.InquiryList = responseData;
        console.log(
            this.InquiryList[0]['MANDT']
        )
      });
  }
}
