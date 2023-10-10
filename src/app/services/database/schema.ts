import Realm from "realm";

export class Application extends Realm.Object<Application> {
  _id!: Realm.BSON.ObjectId;
  anzsco_code!: string;
  submitted_on!: Date;
  received_on!: Date;
  days!: number;
  outcome!: boolean;
  stream!: string;
  location!: string;

  static schema = {
    name: "Application",
    primaryKey: "_id",
    properties: {
      _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
      anzsco_code: "string",
      days: "int",
      location: "string",
      outcome: "bool",
      received_on: "date",
      stream: "string",
      submitted_on: "date",
    },
  };
}
