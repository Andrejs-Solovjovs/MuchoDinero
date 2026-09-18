import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  imports: [],
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.scss",
})
export class Dashboard {
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
