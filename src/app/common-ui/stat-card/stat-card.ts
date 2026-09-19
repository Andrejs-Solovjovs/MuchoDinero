import { Component, input } from "@angular/core";

export interface StatCardData {
  key: string;
  icon: string;
  label: string;
  value: string;
  period: string;
  procentage: string;
  arrowIcon: string;
}

@Component({
  selector: "app-stat-card",
  imports: [],
  templateUrl: "./stat-card.html",
  styleUrl: "./stat-card.scss",
})
export class StatCard {
  
  card = input.required<StatCardData>();

}
