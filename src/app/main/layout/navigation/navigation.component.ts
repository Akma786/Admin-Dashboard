import { Component, OnInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { SharedService } from "src/app/Shared/shared.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  constructor(private auth: SharedService) {}
  matMenu;
  @ViewChild("sidenav") sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  haveChild: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {}
}
