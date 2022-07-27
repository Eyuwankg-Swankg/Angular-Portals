import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveDataComponent } from './employee-leave-data.component';

describe('EmployeeLeaveDataComponent', () => {
  let component: EmployeeLeaveDataComponent;
  let fixture: ComponentFixture<EmployeeLeaveDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
