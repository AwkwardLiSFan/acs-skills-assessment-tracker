import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatSortModule } from "@angular/material/sort";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from "@angular/material/form-field";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatLuxonDateModule,
    MatSortModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatLuxonDateModule,
    MatSortModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" }, // avoid American date formatting across app
  ],
})
export class MaterialModule {}
