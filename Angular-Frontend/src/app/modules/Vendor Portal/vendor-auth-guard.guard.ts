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
export class VendorAuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (!!localStorage.getItem('Vendor')) return true;
    this.router.navigate(['']);
    return false;
  }
}
