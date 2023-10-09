import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddEntryDialogComponent } from "src/app/components/add-entry-dialog/add-entry-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  public addEntry(): void {
    this.dialog.open(AddEntryDialogComponent, { backdropClass: "bgClass" });
  }
}
