import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {Subject} from "rxjs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
  ],
  providers: [
    Subject
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
