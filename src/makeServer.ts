import { IActivity } from "./app/models/activity";
// @ts-ignore
import { Server } from "miragejs";

const activities: IActivity[] = [
  {
    id: "1",
    title: "Čalabrc fest",
    description: "Sajam dobre hrane",
    category: "food",
    date: "2020-05-01T20:20:00.12536",
    city: "Novi Sad",
    venue: "Riblja pijaca"
  },
  {
    id: "2",
    title: "Abba tribute",
    description: "Abba tribute band perfomance",
    category: "music",
    date: "2020-02-03T21:15:00.54867",
    city: "Novi Sad",
    venue: "Gerilla bar"
  }
];
export function makeServer() {
  return new Server({
    routes() {
      this.namespace = "api";

      this.get("/activities", () => activities);
    }
  });
}
