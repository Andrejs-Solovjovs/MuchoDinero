import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  restaurantName = "“Bento” restaurant";
  restaurantAddress = "Riga, 9A Briana Street";
  restaurantPhoto = "assets/images/restaurantLogo.png";
  userName = "Valerija Veselova";
  userRole = "Direktore";
  unreadCount = 5;

  // Инициалы для аватара: "Valerija Veselova" -> "VV"
  get userInitials(): string {
    return this.userName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }
}
