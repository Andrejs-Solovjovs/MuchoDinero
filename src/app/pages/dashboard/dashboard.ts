import { Component } from "@angular/core";
import { StatCard, StatCardData } from "../../common-ui/stat-card/stat-card";

@Component({
  selector: "app-dashboard",
  imports: [StatCard],
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.scss",
})
export class Dashboard {
  readonly cards: StatCardData[] = [
    {
      key: "Revenue",
      icon: "assets/images/revenueStat.png",
      label: "Revenue",
      value: "30567,74",
      period: "vs. yesterday",
      procentage: "12%",
      arrowIcon: "assets/images/arrowUp.png"
    },
    {
      key: "Orders",
      icon: "assets/images/ordersStat.png",
      label: "Orders",
      value: "137",
      period: "vs. yesterday",
      procentage: "12%",
      arrowIcon: "assets/images/arrowUp.png"
    },
    {
      key: "AverageCheck",
      icon: "assets/images/CheckStat.png",
      label: "Average Check",
      value: "32,19",
      period: "vs. yesterday",
      procentage: "12%",
      arrowIcon: "assets/images/arrowUp.png"
    },
    {
      key: "FoodRating",
      icon: "assets/images/RatingStat.png",
      label: "Food Rating",
      value: "5,0",
      period: "vs. yesterday",
      procentage: "12%",
      arrowIcon: "assets/images/arrowUp.png"
    },
    {
      key: "InventoryRisk",
      icon: "assets/images/InventoryStat.png",
      label: "Inventory at Risk",
      value: "3",
      period: "vs. yesterday",
      procentage: "+2%",
      arrowIcon: "assets/images/arrowUp.png"
    }
  ];

  readonly periods = [
  { key: "today", label: "Today" },
  { key: "7d",    label: "7 days" },
  { key: "30d",   label: "30 days" },
];


selectedPeriod = "today";

selectPeriod(key: string): void {
  this.selectedPeriod = key;
  // тут птом можем добавить логику обновления данных
}
}
