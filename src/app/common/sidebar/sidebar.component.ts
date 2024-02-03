import { Component } from "@angular/core";
import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Observable } from "rxjs";
import { ThemeService } from "src/app/services/theme/theme.service";
import { environment } from "src/environments/environment";

export interface RouteLink {
  displayName: string;
  path: string;
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  darkLogoUrl: string =
    environment.iconsDeployUrl + "assets/images/ACSTrackerDarkLogo.png";
  lightLogoUrl: string =
    environment.iconsDeployUrl + "assets/images/ACSTrackerLightLogo.png";
  title = "acs tracker";
  githubIcon: IconDefinition = faGithub;
  helpIcon: IconDefinition = faQuestionCircle;

  links: RouteLink[] = [
    { displayName: "HOME", path: "/home" },
    { displayName: "LOG", path: "/log" },
    { displayName: "VISUALISE", path: "/visualise" },
    { displayName: "ASK", path: "/ask" },
  ];

  public theme$: Observable<string | null> = new Observable();

  constructor(private themeService: ThemeService) {
    this.theme$ = this.themeService.theme$;
  }
}
