import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, map, tap } from "rxjs";
import {
  Application,
  GetAllEntriesGQL,
} from "src/app/graphql/graphql-codegen-generated";
import { ClockService } from "src/app/services/clock/clock.service";
import { ThemeService } from "src/app/services/theme/theme.service";

export type StatisticsCard = {
  header: string;
  text: string;
  icon: string;
  colour: string;
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  /* Data passed on to the statistics component for rendering cards */
  public statCards$: Observable<StatisticsCard[]>;

  constructor(
    private getAllEntriesQuery: GetAllEntriesGQL,
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.themeService.load();
    // this.statCards$ = this.fetchTableEntries();
  }

  /**
   * Runs GraphQL query to fetch all table entries from the MongoDB Atlas Collection
   */
  private fetchTableEntries(): Observable<StatisticsCard[]> {
    return this.getAllEntriesQuery.fetch().pipe(
      map((response) => response.data.applications),
      map((data) => {
        if (data && data.length > 0) {
          this.dataSource = new MatTableDataSource(data);
          return this.calculateStatistics(data as Application[]);
        } else return [];
      }),
    );
  }

  /**
   * Calculate statistics from data fetched from the database
   */
  private calculateStatistics(data: Application[]): StatisticsCard[] {
    const averageProcessingTime: StatisticsCard =
      this.getAverageProcessingTime(data);
    const onshoreApplicants: StatisticsCard = this.getOnshoreApplicants(data);
    const popularAnzscoCode: StatisticsCard =
      this.getMostPopularAnzscoCode(data);
    const pasApplicationCount: StatisticsCard =
      this.getPostAustralianStudyApplicationCount(data);

    return [
      averageProcessingTime,
      onshoreApplicants,
      popularAnzscoCode,
      pasApplicationCount,
    ];
  }

  /**
   * Calculates average processing time from all entries returned
   */
  private getAverageProcessingTime(data: Application[]): StatisticsCard {
    const pastMonthApplications: Application[] = data.filter(
      (application) =>
        ClockService.findDateDiff(
          application.received_on,
          new Date().toISOString(),
        ) < 30,
    );

    // Find median time (avoid averages as sample space isn't large enough yet,
    // values risk being inflated dramatically by a few outliers)
    let days: number[] = [];
    for (const app of pastMonthApplications) {
      days.push(app.days);
    }

    days = [...days].sort((a, b) => a - b);
    const half = Math.floor(days.length / 2);
    const averageProcessingTime: number =
      days.length % 2 ? days[half] : (days[half - 1] + days[half]) / 2;

    return <StatisticsCard>{
      header: `${Math.round(averageProcessingTime)} days`,
      text: `Median response time in past month`,
      colour: "card-one",
      icon: "av_timer",
    };
  }

  /**
   * Calculates the number of onshore applicants
   */
  private getOnshoreApplicants(data: Application[]): StatisticsCard {
    const onshoreApplicants: number = data.filter(
      (application) => application.location === "Onshore",
    ).length;
    const onshoreApplicantsPercentage: number =
      (onshoreApplicants / data.length) * 100;

    return <StatisticsCard>{
      header: `${Math.round(onshoreApplicantsPercentage * 100) / 100}%`,
      text: `Onshore Applicants`,
      colour: "card-two",
      icon: "globe",
    };
  }

  /**
   * Searches for the most popular ANZSCO code mentioned amongst all applications
   */
  private getMostPopularAnzscoCode(data: Application[]): StatisticsCard {
    // Create a dict with the count of each anzsco code from all applications
    const anzscoCounts: any = {};
    data.forEach(
      (app) =>
        (anzscoCounts[app.anzsco_code] =
          (anzscoCounts[app.anzsco_code] || 0) + 1),
    );

    // Find ANZSCO code with highest occurances from dict
    const result = Object.entries(anzscoCounts as object).reduce((a, b) =>
      a[1] > b[1] ? a : b,
    )[0];

    return <StatisticsCard>{
      header: `${result.split(" ")[0]}`, // grab only the numeral and not the entire string
      text: `Most Popular ANZSCO Code`,
      colour: "card-three",
      icon: "computer",
    };
  }

  /**
   * Counts the number of post-australian study applications
   */
  private getPostAustralianStudyApplicationCount(
    data: Application[],
  ): StatisticsCard {
    const pasApplicationCount: number = data.filter(
      (app) => app.stream === "Post Australian Study",
    ).length;
    const pastApplicationPercentage: number =
      (pasApplicationCount / data.length) * 100;

    return <StatisticsCard>{
      header: `${Math.round(pastApplicationPercentage * 100) / 100}%`,
      text: `Post Australian Study Applications`,
      colour: "card-four",
      icon: "school",
    };
  }
}
