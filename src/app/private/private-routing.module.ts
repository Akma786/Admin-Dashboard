import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  {
    path: "home",
    children: [{ path: "", component: AdminDashboardComponent }],
  },
  {
    path: "",
    redirectTo: "home",
    children: [{ path: "", component: AdminDashboardComponent }],
  },
  {
    path: "category",
    children: [{ path: "", component: CategoriesComponent }],
  },
  {
    path: "products",
    children: [{ path: "", component: ProductsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
