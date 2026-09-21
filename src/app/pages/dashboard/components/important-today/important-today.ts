import { Component } from "@angular/core";
import { Panel } from "../../../../common-ui/panel/panel";
import { Icon } from "../../../../common-ui/icon/icon";

// API 
export interface Notice {
  icon: string;
  title: string;
  text: string;
  time: string;
}

@Component({
  selector: "app-important-today",
  imports: [Panel, Icon],
  templateUrl: "./important-today.html",
  styleUrl: "./important-today.scss",
})
export class ImportantToday {
  readonly notices: Notice[] = [
    { icon: "assets/images/inventory.png",    title: "Low stock",       text: "3 items are running low",     time: "20:43" },
    { icon: "assets/images/21.png",           title: "Negative Review", text: "“We waited a long time...”",   time: "19:35" },
    { icon: "assets/images/reservations.png", title: "New reservation", text: "Reservation for 15 person",   time: "13:00" },
    { icon: "assets/images/reports.png",      title: "Inventory Check", text: "Tomorrow at 10:00 AM",        time: "11:00" },
  ];
}
