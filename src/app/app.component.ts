import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarFiltersComponent } from "./products-sidebar/sidebar-filters.component";
import { PaymentsOverviewComponent } from "./payments-overview/payments-overview.component";
import { ShopInsightsCardsSectionComponent } from "./shop-insights-cards-section/shop-insights-cards-section.component";
import { ShopInsightsSearchSectionComponent } from "./shop-insights-search-section/shop-insights-search-section.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarFiltersComponent,
    PaymentsOverviewComponent,
    ShopInsightsCardsSectionComponent,
    ShopInsightsSearchSectionComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
