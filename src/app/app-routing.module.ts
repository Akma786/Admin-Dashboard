import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./main/layout/layout.component";
import { DashboardComponent } from "./Dashbaord/dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuards } from "./guards/auth-guards.guard";
import { AuthComponent } from "./auth/auth.component";
import { POSComponent } from "./pos/pos.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "pos",
    component: POSComponent,
  },
  {
    path: "admin",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./private/private.module").then((m) => m.PrivateModule),
        // canActivate: [AuthGuards],
        data: {},
      },
    ],
  },
  {
    path: "",
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
