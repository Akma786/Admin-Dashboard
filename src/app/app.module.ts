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
import { NavigationComponent } from "./main/layout/navigation/navigation.component";
import { FooterComponent } from "./main/layout/footer/footer.component";
import { LayoutComponent } from "./main/layout/layout.component";
import { ManusComponent } from "./main/layout/manus/manus.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
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
import { POSComponent } from "./pos/pos.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { InvoiceComponent } from "./invoice/invoice.component";
import { AngularFirestoreModule } from '@angular/fire/firestore/'; 
import { MainModule } from "./main/main.module";

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    POSComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    AngularFirestoreModule,
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
    MainModule,
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
    AngularFireDatabaseModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
