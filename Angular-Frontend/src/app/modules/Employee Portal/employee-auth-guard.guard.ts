import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeAuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (!!localStorage.getItem('Employee')) return true;
    this.router.navigate(['']);
    return false;
  }
}
