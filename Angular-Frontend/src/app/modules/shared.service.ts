import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  public removeLocalStorage(storageKey: any) {
    localStorage.removeItem(storageKey);
  }

  public getCustomerDetails(): Object {
    return { customer_id: 12 };
  }
  public getEmployeeDetails(): Object {
    return { employee_id: 3 };
  }
  public getVendorDetails(): Object {
    var data: any = localStorage.getItem('Vendor');
    try {
      console.log('PERFECTO!!!');
      return JSON.parse(data);
    } catch (error) {
      return { vendor_id: 'MOHANRAJ' };
    }
  }
  public getCustomerProfile(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/customer/customerprofile',
      data
    );
  }
  public getEmployeeProfile(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/employee/employee_profile',
      data
    );
  }
  public getVendorProfile(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/vendor/vendorprofile',
      data
    );
  }
}
