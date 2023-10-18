import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { GetAllEntriesGQL } from "src/app/graphql/graphql-codegen-generated";
import { map } from "rxjs";
import { AddEntryDialogComponent } from "../add-entry-dialog/add-entry-dialog.component";

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
    private dialog: MatDialog,
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

  /** Opens dialog to log a new entry in the table */
  public addEntry(): void {
    this.dialog
      .open(AddEntryDialogComponent, { backdropClass: "bgClass" })
      .afterClosed()
      .subscribe(() => {
        // TODO: No subscriptions available, refresh table data manually
      });
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
          "comment",
        ];
      });
  }
}
