import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./common/header/header.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MaterialModule } from "./modules/material/material.module";
import { DialogComponent } from "./common/dialog/dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { ApplicationsTableComponent } from "./components/applications-table/applications-table.component";
import { AddEntryDialogComponent } from "./components/add-entry-dialog/add-entry-dialog.component";
import { LayoutModule } from "@angular/cdk/layout";
import { GraphQLModule } from "./graphql.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DialogComponent,
    ApplicationsTableComponent,
    AddEntryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    GraphQLModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
