import { Injectable, OnInit } from "@angular/core";
import Realm from "realm";
import { Application } from "./schema";

const app = new Realm.App({ id: "application-0-hfron" });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
} catch (err) {
  console.error("Failed to log in", err);
}

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  //   // Connectiong string
  //   private uri = "mongodb+srv://sohamsevak:GCgpe4eyhd6u9Y7r@cluster.zfxtyo5.mongodb.net/?retryWrites=true&w=majority";

  //   // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  //   public client = new MongoClient(this.uri, {
  //     serverApi: {
  //       version: ServerApiVersion.v1,
  //       strict: true,
  //       deprecationErrors: true,
  //     }
  //   });

  constructor() {
    this.connect().then(() => {
      console.log(`Connection established`);
    });
  }

  /** Establish connection with the database and run a test ping */
  private async connect(): Promise<void> {
    // const realm = await Realm.open({
    //   schema: [Application],
    //   sync: { user, flexible: true },
    // });
  }
}
