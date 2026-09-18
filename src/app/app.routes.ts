import { Routes } from "@angular/router";
import { Placeholder } from "./pages/placeholder/placeholder";
import { Dashboard } from "./pages/dashboard/dashboard";

const sections = [
  "menu", "orders", "reservations", "reviews", "sales",
  "inventory", "staff", "customers", "reports", "settings", "pro",
];

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: Dashboard },
  // { path: "orders", component: Orders },
  ...sections.map((path) => ({
    path,
    component: Placeholder,
    data: { title: path.charAt(0).toUpperCase() + path.slice(1) },
  })),
  { path: "**", redirectTo: "dashboard" },
];
