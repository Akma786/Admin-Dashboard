import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import swal from "sweetalert2/dist/sweetalert2.js";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  isLoggedin = false;
  constructor(public auth: AngularFireAuth, private router: Router) {}

  async signin(email: string, password: string) {
    await this.auth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        this.isLoggedin = true;
        this.router.navigate(["/dashboard"]);
        localStorage.setItem("user", JSON.stringify(res.user));
      },
      (err) => {
        this.router.navigate(["/login"]);
        alert("Invalid Email or Password");
      }
    );
  }
  async register(email: string, password: string) {
    await this.auth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        this.isLoggedin = true;
        this.router.navigate(["/login"]);
        localStorage.setItem("user", JSON.stringify(res.user));
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  logout() {
    this.auth.signOut();
    localStorage.removeItem("user");
  }
}
