import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // define icons for use in header
  public githubIcon: IconDefinition = faGithub;
  public helpIcon: IconDefinition = faQuestionCircle;

  // dialog config
  private dialogConfig: MatDialogConfig = new MatDialogConfig();

  constructor(
    private dialog: MatDialog
  ) {}

  /**
   * Sets the configuration for the dialog
   */
  private setDialogConfig(): void {
    this.dialogConfig.disableClose = false;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: "ABOUT",
      message: "placeholder"
    };
  }

  /**
   * Opens the About dialog
   */
  public openAboutDialog(): void {
    this.setDialogConfig();
    this.dialog.open(DialogComponent, this.dialogConfig);
  }

}
