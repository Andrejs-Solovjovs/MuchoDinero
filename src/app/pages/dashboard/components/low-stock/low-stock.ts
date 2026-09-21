import { Component } from "@angular/core";
import { Panel } from "../../../../common-ui/panel/panel";

export type StockLevel = "critical" | "low";

// API ждемс
export interface StockItem {
  name: string;
  amount: string;
  level: StockLevel;
  daysLeft: number;
  image?: string; 
}

@Component({
  selector: "app-low-stock",
  imports: [Panel],
  templateUrl: "./low-stock.html",
  styleUrl: "./low-stock.scss",
})
export class LowStock {
  readonly items: StockItem[] = [
    { name: "Nori",    amount: "1 pack", level: "critical", daysLeft: 1 },
    { name: "Avocado", amount: "2 kg",   level: "critical", daysLeft: 1 },
    { name: "Cheese",  amount: "5 pack", level: "low",      daysLeft: 3 },
  ];

  readonly levelLabel: Record<StockLevel, string> = {
    critical: "Critical",
    low: "Running Low",
  };
}
