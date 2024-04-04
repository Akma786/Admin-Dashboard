import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./layout/navigation/navigation.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { LayoutComponent } from "./layout/layout.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ManusComponent } from "./layout/manus/manus.component";
import { DashboardComponent } from "./Dashbaord/dashboard/dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AngularFireModule } from "@angular/fire";
import { AngularMaterialModule } from "../app/materials/angular-material.module";
import { SharedService } from "./Shared/shared.service";
import { POSComponent } from './pos/pos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LayoutComponent,
    ManusComponent,
    DashboardComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    POSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB6vSQ_62Z14N0eLz44QyXHuRXhawilSjk",
      authDomain: "pos-system-41afa.firebaseapp.com",
      projectId: "pos-system-41afa",
      storageBucket: "pos-system-41afa.appspot.com",
      messagingSenderId: "502623907572",
      appId: "1:502623907572:web:4a7e6a8c62e1e5a3e178a1",
      measurementId: "G-HDWYRN3QCF",
    }),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
