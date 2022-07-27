import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  public getEmployeeDetails(): Object {
    return { employee_id: 3, sequence_no: 1 };
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
