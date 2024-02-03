import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ThemeService } from "src/app/services/theme/theme.service";

@Component({
  selector: "app-theme-toggle",
  templateUrl: "./theme-toggle.component.html",
  styleUrls: ["./theme-toggle.component.scss"],
})
export class ThemeToggleComponent implements OnInit {
  public theme$: Observable<string | null> = new Observable();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.theme$ = this.themeService.theme$;
  }

  toggleTheme(event: MouseEvent) {
    if ((event.target as HTMLInputElement).checked) {
      this.themeService.toggleLightMode();
    } else {
      this.themeService.toggleDarkMode();
    }
  }
}
