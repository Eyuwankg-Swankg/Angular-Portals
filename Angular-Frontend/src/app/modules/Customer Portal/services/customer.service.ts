import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  public makeLoginRequest(data: Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/customer/login', data);
  }
  
  public getInquiryData(data:Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/customer/inquiryList',data);
  }

  public getSaleOrderData(data:Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/customer/saleorderlist',data);
  }

}
