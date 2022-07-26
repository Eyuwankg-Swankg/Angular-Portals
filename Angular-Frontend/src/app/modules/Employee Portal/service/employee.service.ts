import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}

  public getEmployeeDetails(): Object {
    return { employee_id: 3 };
  }
  public makeLoginRequest(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/employee/login',
      data
    );
  }

}
