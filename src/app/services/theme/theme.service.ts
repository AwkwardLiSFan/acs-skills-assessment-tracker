import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor() {
    console.log(`Empty statement`);
  }

  /** Assigns default dark mode upon app load */
  applyTheme() {
    if (
      localStorage["theme"] === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
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
