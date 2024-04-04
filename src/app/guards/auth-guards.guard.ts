import { Injectable, inject } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { Inject } from "@angular/core";
import { session } from "../utils/session";
@Injectable({
  providedIn: "root",
})
export class AuthGuards implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const router: Router = Inject(Router);
    const protectedRoutes: string[] = ["/home", "/register"];
    return protectedRoutes.includes(state.url) && !session
      ? router.navigate(["/"])
      : true;
  }
}
