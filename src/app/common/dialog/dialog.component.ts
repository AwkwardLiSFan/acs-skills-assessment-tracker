import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

// Expand as required in the future
export interface DialogVariables {
  title: string;
  message: string;
}

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  public title: string | undefined = undefined;
  public message: string | undefined = undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogVariables,
    public dialogRef: MatDialogRef<DialogComponent>,
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
  }

  /** Close dialog and return to table view */
  public close(): void {
    this.dialogRef.close();
  }
}
