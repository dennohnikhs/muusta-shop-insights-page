import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInsightsSearchSectionComponent } from './shop-insights-search-section.component';

describe('ShopInsightsSearchSectionComponent', () => {
  let component: ShopInsightsSearchSectionComponent;
  let fixture: ComponentFixture<ShopInsightsSearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopInsightsSearchSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopInsightsSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
