import { Component } from "@angular/core";
import { Panel } from "../../../../common-ui/panel/panel";

export interface Reservation {
  time: string;   // "HH:MM"
  name: string;
  event: string;
  guests: number;
}

@Component({
  selector: "app-upcoming-reservations",
  imports: [Panel],
  templateUrl: "./upcoming-reservations.html",
  styleUrl: "./upcoming-reservations.scss",
})
export class UpcomingReservations {
  private readonly reservations: Reservation[] = [
    { time: "18:00", name: "Alina Migaļega",    event: "Birthday",         guests: 15 },
    { time: "20:00", name: "Valerija Veselova", event: "Business Meeting", guests: 9 },
    { time: "20:30", name: "Nikita Smirnovs",   event: "Corporate Event",  guests: 103 },
    { time: "19:30", name: "Andrejs Solovjovs", event: "Mafia",            guests: 40 },
  ];

  readonly upcoming = [...this.reservations].sort((a, b) => a.time.localeCompare(b.time));
}
