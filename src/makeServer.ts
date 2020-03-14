import { IActivity } from "./app/models/activity";
// @ts-ignore
import { Server } from "miragejs";

const activities: IActivity[] = [
  {
    id: "1",
    title: "Čalabrc fest",
    description: "Sajam dobre hrane",
    category: "food",
    date: "05/15/2020",
    city: "Novi Sad",
    venue: "Riblja pijaca"
  },
  {
    id: "2",
    title: "Abba tribute",
    description: "Abba tribute band perfomance",
    category: "music",
    date: "02/03/2020",
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
