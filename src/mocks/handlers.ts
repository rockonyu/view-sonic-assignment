import { http, ws, HttpResponse } from "msw";
import students from "./students.json";
import { BASE_API_PATH, BASE_WS_PATH } from "@/constants/api";

const DURATION = 200;
const wsClassroom = ws.link(`${BASE_WS_PATH}/class/*`);

export const handlers = [
  http.get(`${BASE_API_PATH}/class/*`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: "X58E9647",
      name: "302 Science",
      url: "https://www.classswift.viewsonic.io/",
      seatCount: 30,
    });
  }),
  wsClassroom.addEventListener("connection", ({ client }) => {
    students.forEach((student, i) => {
      setTimeout(() => {
        client.send(JSON.stringify(student));
      }, i * DURATION);
    });
  }),
];
