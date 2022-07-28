import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorQuoteRequestComponent } from './vendor-quote-request.component';

describe('VendorQuoteRequestComponent', () => {
  let component: VendorQuoteRequestComponent;
  let fixture: ComponentFixture<VendorQuoteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorQuoteRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorQuoteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
