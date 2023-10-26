import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { AddEntryDialogComponent } from "../add-entry-dialog/add-entry-dialog.component";

@Component({
  selector: "app-applications-table",
  templateUrl: "./applications-table.component.html",
  styleUrls: ["./applications-table.component.scss"],
})
export class ApplicationsTableComponent implements OnInit {
  // Receive table data as input from home component
  tableData: MatTableDataSource<any>;
  @Input()
  get dataSource(): MatTableDataSource<any> | undefined {
    return this.tableData;
  }
  set dataSource(value: MatTableDataSource<any>) {
    this.tableData = value;
    this.setTableEntries();
  }

  // Table controls
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // Table data
  public displayedColumns: Array<string> = [];

  // Track screen size
  public resizeTable = false;

  constructor(
    public breakpointObserver: BreakpointObserver,
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
  }

  /** Opens dialog to log a new entry in the table */
  public addEntry(): void {
    this.dialog
      .open(AddEntryDialogComponent, {
        hasBackdrop: true,
        disableClose: false,
        closeOnNavigation: true,
        backdropClass: "bgClass",
      })
      .afterClosed()
      .subscribe(() => {
        // TODO: No subscriptions available, refresh table data manually
      });
  }

  /**
   * Initialise table with data
   */
  private setTableEntries(): void {
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;
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
  }
}
