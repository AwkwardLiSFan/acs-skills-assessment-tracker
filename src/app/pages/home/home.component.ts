import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { map } from "rxjs";
import {
  Application,
  GetAllEntriesGQL,
} from "src/app/graphql/graphql-codegen-generated";
import { ClockService } from "src/app/services/clock/clock.service";

export type StatisticsCard = {
  header: string;
  text: string;
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  /* Data passed on to the statistics component for rendering cards */
  public statCards: StatisticsCard[] | undefined;

  constructor(private getAllEntriesQuery: GetAllEntriesGQL) {}

  ngOnInit(): void {
    this.fetchTableEntries();
  }

  /**
   * Runs GraphQL query to fetch all table entries from the MongoDB Atlas Collection
   */
  private fetchTableEntries(): void {
    this.getAllEntriesQuery
      .fetch()
      .pipe(map((response) => response.data.applications))
      .subscribe((data) => {
        if (data && data.length > 0) {
          this.dataSource = new MatTableDataSource(data);
          this.statCards = this.calculateStatistics(data as Application[]);
        }
      });
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
      text: `average response time in past month`,
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
    };
  }
}
