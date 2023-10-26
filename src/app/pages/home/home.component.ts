import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { map } from "rxjs";
import { GetAllEntriesGQL } from "src/app/graphql/graphql-codegen-generated";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private getAllEntriesQuery: GetAllEntriesGQL) {}

  ngOnInit(): void {
    console.log(`Placeholder comment to pass linting, remove before pushing`);
    // this.fetchTableEntries();
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
      });
  }
}
