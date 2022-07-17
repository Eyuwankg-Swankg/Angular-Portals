import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  public makeLoginRequest(data: Object): Observable<any> {
    console.log(data);
    return this.httpClient.post<any>('http://localhost:5000/customer/login', data);
  }
}
