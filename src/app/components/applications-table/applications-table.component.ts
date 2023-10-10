import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DateTime } from "luxon";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { GetAllEntriesGQL } from "src/app/graphql/graphql-codegen-generated";
import { map } from "rxjs";

@Component({
  selector: "app-applications-table",
  templateUrl: "./applications-table.component.html",
  styleUrls: ["./applications-table.component.scss"],
})
export class ApplicationsTableComponent implements OnInit {
  // Table controls
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // Table data
  public displayedColumns: Array<string> = [];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // Track screen size
  public resizeTable = false;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private getAllEntriesQuery: GetAllEntriesGQL,
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(["(max-width: 1000px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.resizeTable = true;
        }
      });

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
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        this.displayedColumns = [
          "anzsco_code",
          "submitted_on",
          "received_on",
          "days",
          "outcome",
          "stream",
          "location",
        ];
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
