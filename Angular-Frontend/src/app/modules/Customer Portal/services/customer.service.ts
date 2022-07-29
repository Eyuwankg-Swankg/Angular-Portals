import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}
  
  public getCustomerDetails(): Object {
    var data: any = localStorage.getItem('Customer');
    try {
      console.log("PERFECTO!!!")
      return JSON.parse(data);
      // return { customer_id: 1223 };
    } catch (error) {
      return { customer_id: 12 };
    }
  }
  public setCustomerDetails(ID: any) {
    console.log(ID);
    localStorage.setItem('Customer', JSON.stringify({ customer_id: ID }));
  }

  public makeLoginRequest(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/login',
      data
    );
  }

  public getInquiryData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/inquiryList',
      data
    );
  }

  public getSaleOrderData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/saleorderlist',
      data
    );
  }

  public getDeliveryData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/deliverylist',
      data
    );
  }

  public getInvoiceData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/invoicelist',
      data
    );
  }

  public getPaymentAging(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/paymentaging',
      data
    );
  }

  public getCreditData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/creditmemo',
      data
    );
  }

  public getDebitData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/debitmemo',
      data
    );
  }

  public getInvoicePDF(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/invoiceexport',
      data
    );
  }


}
