import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DateTime } from "luxon";
import {
  AddEntryGQL,
  AddEntryMutationVariables,
} from "src/app/graphql/graphql-codegen-generated";

export const anzscoCodes: Map<number, string> = new Map<number, string>([
  [261311, "Analyst Programmer"],
  [135111, "Chief Information Officer"],
  [262111, "Database Administrator"],
  [261312, "Developer Programmer"],
  [261111, "ICT Business Analyst"],
  [135199, "ICT Managers NEC"],
  [135112, "ICT Project Manager"],
  [263211, "ICT Quality Assurance Engineer"],
  [262112, "ICT Security Specialist"],
  [263299, "ICT Support and Test Engineer NEC"],
  [263212, "ICT Support Engineer"],
  [263213, "ICT Systems Test Engineer"],
  [223211, "ICT Trainer"],
  [261211, "Multimedia Specialist"],
  [263112, "Network Administrator"],
  [263113, "Network Analyst"],
  [261399, "Software and Application Programmer"],
  [261313, "Software Engineer"],
  [261314, "Software Tester"],
  [262113, "Systems Administrator"],
  [261112, "Systems Analyst"],
  [313113, "Web Administrator"],
  [261212, "Web Developer"],
  [263111, "Computer Network and Systems Engineer"],
]);

export const potentialOutcomes: Array<string> = ["Positive", "Negative"];

export const potentialStreams: Array<string> = [
  "Temporary Graduate",
  "Post Australian Study",
  "General",
  "RPL",
];

export const potentialLocations: Array<string> = ["Onshore", "Offshore"];

export interface FormFields {
  anzsco: string;
  dateSubmitted: string;
  dateReceived: string;
  outcome: boolean;
  stream: string;
  location: string;
  comment: string;
}

@Component({
  selector: "app-add-entry-dialog",
  templateUrl: "./add-entry-dialog.component.html",
  styleUrls: ["./add-entry-dialog.component.scss"],
})
export class AddEntryDialogComponent {
  // Setup form data
  public codes: Map<number, string> = anzscoCodes;
  public outcomes: Array<string> = potentialOutcomes;
  public streams: Array<string> = potentialStreams;
  public locations: Array<string> = potentialLocations;

  // Setup form controls
  public form: FormGroup = this.formBuilder.group({
    anzsco: ["", Validators.required],
    dateSubmitted: ["", Validators.required],
    dateReceived: ["", Validators.required],
    outcome: ["", Validators.required],
    stream: ["", Validators.required],
    location: ["", Validators.required],
    comment: ["", Validators.nullValidator],
  });

  // Bound date picker
  public upperBound: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEntryDialogComponent>,
    private readonly addEntryMutation: AddEntryGQL,
    private readonly snackBar: MatSnackBar,
  ) {}

  /** Saves the entry to the database */
  public save(): void {
    // Form variables
    const variables: AddEntryMutationVariables = {
      object: {
        anzsco_code:
          this.form.controls["anzsco"].value.key +
          " - " +
          this.form.controls["anzsco"].value.value,
        submitted_on: this.form.controls["dateSubmitted"].value,
        received_on: this.form.controls["dateReceived"].value,
        days: this.findDateDiff(
          this.form.controls["dateSubmitted"].value,
          this.form.controls["dateReceived"].value,
        ),
        outcome:
          this.form.controls["outcome"].value === "Positive" ? true : false,
        stream: this.form.controls["stream"].value,
        location: this.form.controls["location"].value,
        comment: this.form.controls["comment"].value,
      },
    };

    // Call mutation to save entry to database
    this.addEntryMutation.mutate(variables).subscribe((result) => {
      if (result.errors) {
        this.snackBar.open(
          "Unexpected error adding new entry, try again later",
          "X",
          {
            duration: 2000,
            panelClass: ["failure-snackbar"],
          },
        );
      } else {
        this.snackBar.open("Successfully added new entry", "X", {
          duration: 2000,
          panelClass: ["success-snackbar"],
        });
      }
    });

    // Close dialog
    this.dialogRef.close();
  }

  /** Close dialog and return to table view */
  public close(): void {
    this.dialogRef.close();
  }

  /**
   * Finds difference in days given two dates
   * @param
   * startDate: initial date of application in ISOString format
   * endDate: date of receiving result in ISOString format
   * @returns
   * Days between the two given dates as a number
   */
  private findDateDiff(startDate: string, endDate: string): number {
    const start: DateTime = DateTime.fromISO(startDate);
    const end: DateTime = DateTime.fromISO(endDate);

    return end.diff(start, "days").toObject().days!;
  }
}
