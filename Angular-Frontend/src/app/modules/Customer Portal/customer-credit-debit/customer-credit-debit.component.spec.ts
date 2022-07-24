import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreditDebitComponent } from './customer-credit-debit.component';

describe('CustomerCreditDebitComponent', () => {
  let component: CustomerCreditDebitComponent;
  let fixture: ComponentFixture<CustomerCreditDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCreditDebitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCreditDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
