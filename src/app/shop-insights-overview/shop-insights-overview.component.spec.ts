import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInsightsOverviewComponent } from './shop-insights-overview.component';

describe('ShopInsightsOverviewComponent', () => {
  let component: ShopInsightsOverviewComponent;
  let fixture: ComponentFixture<ShopInsightsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopInsightsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopInsightsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
