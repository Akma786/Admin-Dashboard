import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { LayoutComponent } from "./layout/layout.component";

import { NavigationComponent } from "./layout/navigation/navigation.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ManusComponent } from "./layout/manus/manus.component";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularMaterialModule } from "../materials/angular-material.module";
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    FooterComponent,
    ManusComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    MatMenuModule,
    MatSidenavModule, MatButtonModule
    ,MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    
  ],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class MainModule {}
