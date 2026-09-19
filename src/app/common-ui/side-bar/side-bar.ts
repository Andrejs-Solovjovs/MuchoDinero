import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import {
  LucideAngularModule,
  LucideIconData,
  House,
  ClipboardList,
  ShoppingBasket,
  CalendarDays,
  Star,
  ChartNoAxesColumn,
  Package,
  Users,
  Contact,
  FileText,
  Settings,
  Crown,
  ArrowRight,
} from "lucide-angular"; 

export interface NavItem {
  label: string;        // текст нав пагинации
  path: string;         // роут
  icon: string; // иконки сюда в обьект лучше
}

@Component({
  selector: "app-side-bar",
  imports: [RouterLink, RouterLinkActive,LucideAngularModule],
  templateUrl: "./side-bar.html",
  styleUrl: "./side-bar.scss",
})
export class SideBar {
  readonly arrowIcon = ArrowRight;

  readonly navItems: NavItem[] = [
    { label: "Dashboard",    path: "/dashboard",    icon: "assets/images/dashboard.png" },
    { label: "Menu",         path: "/menu",         icon: "assets/images/menu.png" },
    { label: "Orders",       path: "/orders",       icon: "assets/images/orders.png" },
    { label: "Reservations", path: "/reservations", icon: "assets/images/reservations.png" },
    { label: "Reviews",      path: "/reviews",      icon: "assets/images/reviews.png" },
    { label: "Sales",        path: "/sales",        icon: "assets/images/sales.png" },
    { label: "Inventory",    path: "/inventory",    icon: "assets/images/inventory.png" },
    { label: "Staff",        path: "/staff",        icon: "assets/images/staff.png" },
    { label: "Customers",    path: "/customers",    icon: "assets/images/customers.png" },
    { label: "Reports",      path: "/reports",      icon: "assets/images/reports.png" },
    { label: "Settings",     path: "/settings",     icon: "assets/images/settings.png" },
  ];
}
