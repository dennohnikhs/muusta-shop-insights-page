import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInsightsCardsSectionComponent } from './shop-insights-cards-section.component';

describe('ShopInsightsCardsSectionComponent', () => {
  let component: ShopInsightsCardsSectionComponent;
  let fixture: ComponentFixture<ShopInsightsCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopInsightsCardsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopInsightsCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
