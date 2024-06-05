import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOverviewDataComponent } from './payment-overview-data.component';

describe('PaymentOverviewDataComponent', () => {
  let component: PaymentOverviewDataComponent;
  let fixture: ComponentFixture<PaymentOverviewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentOverviewDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentOverviewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
