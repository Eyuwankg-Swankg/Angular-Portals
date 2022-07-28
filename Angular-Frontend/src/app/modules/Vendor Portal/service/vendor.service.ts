import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) {}

  public getVendorDetails(): Object {
    return { vendor_id: "MOHANRAJ"};
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

}
