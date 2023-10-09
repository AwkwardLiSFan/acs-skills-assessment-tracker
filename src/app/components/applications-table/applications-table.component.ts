import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DateTime } from "luxon";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

type TableEntry = {
  anzsco_code: string;
  date_submitted: string;
  date_received: string;
  days_taken: number | undefined;
  outcome: boolean;
  stream: string;
  location: string;
};

@Component({
  selector: "app-applications-table",
  templateUrl: "./applications-table.component.html",
  styleUrls: ["./applications-table.component.scss"],
})
export class ApplicationsTableComponent implements OnInit {
  // Table controls
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  // Table data
  displayedColumns: Array<string> = [
    "anzsco",
    "date_submitted",
    "date_received",
    "days_taken",
    "outcome",
    "stream",
    "location",
  ];
  dataSource: MatTableDataSource<TableEntry>;

  // Track screen size
  public resizeTable = false;

  constructor(
    private dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
  ) {
    // test data
    const data: TableEntry[] = [
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "PAS",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "PAS",
        location: "Offshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: false,
        stream: "PAS",
        location: "Offshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: false,
        stream: "PAS",
        location: "Offshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: false,
        stream: "PAS",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "PAS",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: false,
        stream: "PAS",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "PAS",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "PAS",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "Diploma",
        location: "Onshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: false,
        stream: "General",
        location: "Offshore",
      },
      {
        anzsco_code: "261313",
        date_submitted: new Date("14 August 2023").toISOString(),
        date_received: new Date("14 November 2023").toISOString(),
        days_taken: this.findDateDiff(
          new Date("14 August 2023").toISOString(),
          new Date("14 November 2023").toISOString(),
        ),
        outcome: true,
        stream: "PAS",
        location: "Offshore",
      },
    ];

    this.dataSource = new MatTableDataSource(data);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 100);
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(["(max-width: 1000px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log("Viewport width is 1000px or less!");
          this.resizeTable = true;
        } else {
          console.log("Viewport width is greater than 1000px!");
        }
      });
  }

  /**
   * Finds difference in days given two dates
   * @param
   * startDate: initial date of application in ISOString format
   * endDate: date of receiving result in ISOString format
   * @returns
   * Days between the two given dates as a number
   */
  private findDateDiff(startDate: string, endDate: string): number | undefined {
    const start: DateTime = DateTime.fromISO(startDate);
    const end: DateTime = DateTime.fromISO(endDate);

    return end.diff(start, "days").toObject().days;
  }
}
