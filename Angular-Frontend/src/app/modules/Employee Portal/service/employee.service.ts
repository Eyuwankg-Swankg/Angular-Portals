import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  public getEmployeeDetails(): Object {
    var data: any = localStorage.getItem('Employee');
    try {
      console.log('PERFECTO!!!');
      // return JSON.parse(data);
      return { employee_id: '3'};
    } catch (error) {
      return { employee_id: '3'};
    }
  }
  public setEmployeeDetails(ID: any) {
    console.log(ID);
    localStorage.setItem(
      'Employee',
      JSON.stringify({ employee_id: ID})
    );
  }
  public makeLoginRequest(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/employee/login',
      data
    );
  }

  public getPayrollData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/employee/employee_payroll',
      data
    );
  }

  public getLeaveData(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/employee/employee_leave_data',
      data
    );
  }

  public getPaySlip(data: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:5000/employee/employee_payslip',
      data
    );
  }
}
