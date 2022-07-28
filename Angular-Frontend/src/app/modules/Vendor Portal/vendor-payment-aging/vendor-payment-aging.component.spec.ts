import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPaymentAgingComponent } from './vendor-payment-aging.component';

describe('VendorPaymentAgingComponent', () => {
  let component: VendorPaymentAgingComponent;
  let fixture: ComponentFixture<VendorPaymentAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPaymentAgingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPaymentAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
