import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core/error/error-options";
import { Router, RouterLink } from "@angular/router";
import { SharedService } from "src/app/Shared/shared.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isSignedin = false;

  matcher = new MyErrorStateMatcher();
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    if (localStorage.getItem("user") != null) {
      this.isSignedin = true;
    } else {
      this.isSignedin = false;
    }
  }
  async onSingin(emaillogin: string, passwordlogin: string) {
    await this.sharedService.signin(emaillogin, passwordlogin);
    if (this.sharedService.isLoggedin) {
      console.log(emaillogin.valueOf() + " " + passwordlogin.valueOf());

      this.isSignedin = true;
    }
  }
}
