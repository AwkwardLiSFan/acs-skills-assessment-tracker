import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { DialogComponent } from "../dialog/dialog.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // define icons for use in header
  public githubIcon: IconDefinition = faGithub;
  public helpIcon: IconDefinition = faQuestionCircle;

  // dialog config
  private dialogConfig: MatDialogConfig = new MatDialogConfig();

  // text read from about.txt in assets folder
  private aboutText: string | undefined = undefined;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.http
      .get("assets/about.txt", { responseType: "text" })
      .subscribe((data) => (this.aboutText = data));
  }

  /**
   * Sets the configuration for the dialog
   */
  private setDialogConfig(): void {
    this.dialogConfig.disableClose = false;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.data = {
      title: "ABOUT",
      message: this.aboutText,
    };
    this.dialogConfig.backdropClass = "bgClass";
  }

  /**
   * Opens the About dialog
   */
  public openAboutDialog(): void {
    this.setDialogConfig();
    this.dialog.open(DialogComponent, this.dialogConfig);
  }
}
