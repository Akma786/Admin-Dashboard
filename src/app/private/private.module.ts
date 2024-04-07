import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PrivateRoutingModule } from "./private-routing.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductsComponent } from "./products/products.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CategoriesComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule
  ],
})
export class PrivateModule {}
