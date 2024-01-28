import { Component } from "@angular/core";
import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
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
  title = "acs tracker";
  githubIcon: IconDefinition = faGithub;
  helpIcon: IconDefinition = faQuestionCircle;

  links: RouteLink[] = [
    { displayName: "HOME", path: "/home" },
    { displayName: "LOG", path: "/log" },
    { displayName: "VISUALISE", path: "/visualise" },
    { displayName: "ASK", path: "/ask" },
  ];

  constructor() {
    console.log(`Sidebar WIP`);
  }
}
