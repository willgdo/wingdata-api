import Fastify from "fastify";
import { aircraftRoutes } from "./routes/aircraft.routes";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get("/health", async () => ({
    status: "ok",
    service: "WingData API",
  }));

  app.register(aircraftRoutes);

  return app;
}
