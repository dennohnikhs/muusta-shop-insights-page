import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarFiltersComponent } from "./products-sidebar/sidebar-filters.component";
import { ShopInsightsOverviewComponent } from "./shop-insights-overview/shop-insights-overview.component";
import { MonthlyOrdersComponent } from "./monthly-orders/monthly-orders.component";
import { MonthlyRevenueComponent } from "./monthly-revenue/monthly-revenue.component";
import { PaymentsOverviewComponent } from "./payments-overview/payments-overview.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarFiltersComponent,
    ShopInsightsOverviewComponent,
    MonthlyOrdersComponent,
    MonthlyRevenueComponent,
    PaymentsOverviewComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
