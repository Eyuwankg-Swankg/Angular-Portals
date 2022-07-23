import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFinancialSheetComponent } from './customer-financial-sheet.component';

describe('CustomerFinancialSheetComponent', () => {
  let component: CustomerFinancialSheetComponent;
  let fixture: ComponentFixture<CustomerFinancialSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFinancialSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFinancialSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
