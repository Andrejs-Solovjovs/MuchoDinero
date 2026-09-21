import { Component } from "@angular/core";
import { Panel } from "../../../../common-ui/panel/panel";

export interface Dish {
  name: string;
  portions: number;
  revenue: number;
  image?: string; // фото блюда (заглушка, андрюха где бэк зараза)
}

@Component({
  selector: "app-top-dishes",
  imports: [Panel],
  templateUrl: "./top-dishes.html",
  styleUrl: "./top-dishes.scss",
})
export class TopDishes {
  readonly dishes: Dish[] = [
    { name: "Beef burger",  portions: 135, revenue: 13500 },
    { name: "Ramen soup",   portions: 100, revenue: 11000 },
    { name: "Kappa maki",   portions: 89,  revenue: 9700 },
    { name: "Fri",          portions: 74,  revenue: 2300 },
    { name: "Salmon steak", portions: 56,  revenue: 7100 },
  ];

  // Самое прибыльное блюдо 
  private readonly maxRevenue = Math.max(...this.dishes.map((d) => d.revenue));

  percent(dish: Dish): number {
    return (dish.revenue / this.maxRevenue) * 100;
  }
}
