import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

export const anzscoCodes: Map<number, string> = new Map<number, string>([
  [261311, "Analyst Programmer"],
  [135111, "Chief Information Officer"],
  [262111, "Database Administrator"],
  [261312, "Developer Programmer"],
  [261111, "ICT Business Analysts"],
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
  [261112, "Systems Analysts"],
  [313113, "Web Administrator"],
  [261212, "Web Developer"]
]);

@Component({
  selector: 'app-add-entry-dialog',
  templateUrl: './add-entry-dialog.component.html',
  styleUrls: ['./add-entry-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEntryDialogComponent {

  // Setup ANZSCO Code List
  public codes: Map<number, string> = anzscoCodes;

  // Setup form controls
  public form: FormGroup = this.formBuilder.group({
    anzsco: ['', [Validators.required, Validators.email]],
    dateSubmitted: ['', Validators.required],
    dateReceived: ['', Validators.required],
    daysTaken: ['', Validators.required],
    stream: ['', Validators.required],
    location: ['', Validators.required]
  });

  constructor (
    private formBuilder: FormBuilder
  ) {}

  /** Saves the entry to the database */
  public save(): void {
    console.log(`Pass`);
  }

  /** Returns an error message for invalid responses */
  errorMessage(formControlName: string) {
    if (this.form.controls[`${formControlName}`].hasError('required')) {
      return 'You must enter a valid value';
    }
    return this.form.controls[`${formControlName}`].hasError(`${formControlName}`) ? 'Not a valid response' : '';
  }
}
