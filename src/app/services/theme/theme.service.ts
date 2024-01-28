import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor() {
    console.log(`Empty statement`);
  }

  /** Assigns default dark mode upon app load */
  load() {
    if (
      localStorage["theme"] === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  toggleLightMode() {
    localStorage["theme"] = "light";
  }

  toggleDarkMode() {
    localStorage["theme"] = "dark";
  }
}
