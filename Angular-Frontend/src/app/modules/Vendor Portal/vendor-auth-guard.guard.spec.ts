import { TestBed } from '@angular/core/testing';

import { VendorAuthGuardGuard } from './vendor-auth-guard.guard';

describe('VendorAuthGuardGuard', () => {
  let guard: VendorAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VendorAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
