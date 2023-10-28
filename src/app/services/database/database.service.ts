import { Injectable } from "@angular/core";
import * as Realm from "realm-web";
import { environment } from "src/environments/environment";

export const APP_ID = `${environment.APP_ID}`;

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  // Realm app to interact with MongoDB
  private app: Realm.App = new Realm.App(APP_ID);

  /**
   * Generates an access token for anonymous users accessing the site
   * @returns access token string
   */
  public async getValidAccessToken(): Promise<string> {
    if (!this.app.currentUser)
      // If no user is logged in, log in an anonymous user
      await this.app.logIn(Realm.Credentials.anonymous());
    // The logged in user's access token might be stale,
    // Refreshing custom data also refreshes the access token
    else await this.app.currentUser.refreshCustomData();

    // Get a valid access token for the current user
    localStorage.setItem("token", this.app.currentUser!.accessToken!);
    return this.app.currentUser!.accessToken!;
  }
}
