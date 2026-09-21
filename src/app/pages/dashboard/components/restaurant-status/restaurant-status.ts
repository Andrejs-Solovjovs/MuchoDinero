import { Component, computed, signal } from "@angular/core";
import { Panel } from "../../../../common-ui/panel/panel";
import { Icon } from "../../../../common-ui/icon/icon";

type WorkStatus = "works" | "break" | "closed";

@Component({
  selector: "app-restaurant-status",
  imports: [Panel, Icon],
  templateUrl: "./restaurant-status.html",
  styleUrl: "./restaurant-status.scss",
})
export class RestaurantStatus {
  readonly statuses: { value: WorkStatus; label: string }[] = [
    { value: "works", label: "Works" },
    { value: "break", label: "Break" },
    { value: "closed", label: "Closed" },
  ];
  readonly status = signal<WorkStatus>("works");

  // Жду API АНДРЮХА
  readonly dining = { occupied: 60, capacity: 100 };
  readonly allStaffPresent = true;
  readonly serving = { minutes: 25, change: -12 };
  readonly rating = { value: 5, reviews: 178 };
  readonly stars = [1, 2, 3, 4, 5];

  readonly diningPercent = computed(() =>
    Math.round((this.dining.occupied / this.dining.capacity) * 100),
  );

  // из int в decimal с цифрой после запятой 
  readonly ratingText = this.rating.value.toFixed(1).replace(".", ",");

  setStatus(event: Event): void {
    this.status.set((event.target as HTMLSelectElement).value as WorkStatus);
  }
}
