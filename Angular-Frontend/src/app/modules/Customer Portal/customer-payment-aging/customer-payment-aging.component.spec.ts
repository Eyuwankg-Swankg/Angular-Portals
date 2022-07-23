import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentAgingComponent } from './customer-payment-aging.component';

describe('CustomerPaymentAgingComponent', () => {
  let component: CustomerPaymentAgingComponent;
  let fixture: ComponentFixture<CustomerPaymentAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPaymentAgingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPaymentAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
