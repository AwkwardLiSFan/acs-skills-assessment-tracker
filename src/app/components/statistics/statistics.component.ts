import { Component, Input } from "@angular/core";
import { StatisticsCard } from "src/app/pages/home/home.component";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent {
  @Input()
  statsData: StatisticsCard[];
}
