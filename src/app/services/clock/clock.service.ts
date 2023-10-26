import { Injectable } from "@angular/core";
import { DateTime } from "luxon";

@Injectable({
  providedIn: "root",
})
export class ClockService {
  /**
   * Finds difference in days given two dates
   * @param
   * startDate: initial date of application in ISOString format
   * endDate: date of receiving result in ISOString format
   * @returns
   * Days between the two given dates as a number
   */
  public static findDateDiff(startDate: string, endDate: string): number {
    const start: DateTime = DateTime.fromISO(startDate);
    const end: DateTime = DateTime.fromISO(endDate);

    return end.diff(start, "days").toObject().days!;
  }
}
