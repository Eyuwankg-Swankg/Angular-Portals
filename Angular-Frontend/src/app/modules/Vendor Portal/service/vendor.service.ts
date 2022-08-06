import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private httpClient: HttpClient) {}

  public getVendorDetails(): Object {
    var data: any = localStorage.getItem('Vendor');
    try {
      console.log("PERFECTO!!!")
      // return JSON.parse(data);
      return { vendor_id: 'MOHANRAJ' };
    } catch (error) {
      return { vendor_id: 'MOHANRAJ' };
    }
  }
  public setVendorDetails(ID: any) {
    console.log(ID);
    localStorage.setItem('Vendor', JSON.stringify({ vendor_id: ID }));
  }
  public makeLoginRequest(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/login',
      data
    );
  }
  public getQuoteRequest(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/quoterequestlist',
      data
    );
  }

  public getGoodsReceipt(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/goodslist',
      data
    );
  }

  public getInvoiceList(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/invoicelist',
      data
    );
  }

  public getPaymentAging(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/vendorpay',
      data
    );
  }

  public getCreditList(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/credit',
      data
    );
  }

  public getDebitList(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/debit',
      data
    );
  }

  public getPurchaseOrder(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/purchaseorderlist',
      data
    );
  }
  public getInvoicePDF(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/invoiceexport',
      data
    );
  }
}
