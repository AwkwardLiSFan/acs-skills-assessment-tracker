import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private currentTheme: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  public theme$: Observable<string | null> = this.currentTheme.asObservable();

  /** Assigns default dark mode upon app load */
  applyTheme() {
    if (
      localStorage["theme"] === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      this.currentTheme.next("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      this.currentTheme.next("light");
    }
  }

  toggleLightMode() {
    localStorage["theme"] = "light";
    this.applyTheme();
  }

  toggleDarkMode() {
    localStorage["theme"] = "dark";
    this.applyTheme();
  }
}
