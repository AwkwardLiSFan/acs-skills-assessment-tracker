import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconDefinition, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // define icons for use in header
  public githubIcon: IconDefinition = faGithub;
  public helpIcon: IconDefinition = faQuestionCircle;

  constructor(
    private dialog: MatDialog
  ) {}
  
  /**
   * Opens the About dialog
   */
  public openAboutDialog(): void {

  }

}
