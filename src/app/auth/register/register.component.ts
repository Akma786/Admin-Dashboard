import { Component, OnInit } from "@angular/core";
import { MyErrorStateMatcher } from "../login/login.component";
import { SharedService } from "src/app/Shared/shared.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(public sharedService: SharedService) {}
  matcher = new MyErrorStateMatcher();
  isSignedin = false;
  ngOnInit(): void {}
  async onSignUp(emailSignup: string, password: string) {
    await this.sharedService.register(emailSignup, password);
    if (this.sharedService.isLoggedin) {
      this.isSignedin = true;
      console.log(emailSignup.valueOf() + " " + password.valueOf());
    }
  }
}
