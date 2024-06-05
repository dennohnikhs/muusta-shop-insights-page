import { Component } from "@angular/core";
import { PaymentOverviewDataComponent } from "../payment-overview-data/payment-overview-data.component";

@Component({
  selector: "app-payments-overview",
  standalone: true,
  imports: [PaymentOverviewDataComponent],
  templateUrl: "./payments-overview.component.html",
  styleUrl: "./payments-overview.component.scss",
})
export class PaymentsOverviewComponent {}
