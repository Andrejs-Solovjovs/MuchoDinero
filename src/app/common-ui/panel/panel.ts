import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-panel",
  imports: [RouterLink],
  templateUrl: "./panel.html",
  styleUrl: "./panel.scss",
})
export class Panel {
  title = input.required<string>();
  icon = input<string>();           // путь к иконке 
  iconTile = input(false);          // true — иконка в светлом квадрате
  seeAllLink = input<string>();     // "See all"
}
