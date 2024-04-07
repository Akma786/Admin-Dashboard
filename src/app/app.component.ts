import { Component } from "@angular/core";
import { SharedService } from "./Shared/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Admin-Dashboard";
  show = false;
  constructor(auth: SharedService) {}

  keep() {
    if (localStorage.getItem("user")) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
