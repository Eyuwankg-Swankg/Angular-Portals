import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSaleorderComponent } from './customer-saleorder.component';

describe('CustomerSaleorderComponent', () => {
  let component: CustomerSaleorderComponent;
  let fixture: ComponentFixture<CustomerSaleorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSaleorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSaleorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
