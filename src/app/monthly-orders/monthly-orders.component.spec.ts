import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyOrdersComponent } from './monthly-orders.component';

describe('MonthlyOrdersComponent', () => {
  let component: MonthlyOrdersComponent;
  let fixture: ComponentFixture<MonthlyOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
