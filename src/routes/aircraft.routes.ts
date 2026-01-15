import { FastifyInstance } from "fastify";
import { findAircraftByRegistration } from "../services/aircraft.services";

export async function aircraftRoutes(app: FastifyInstance) {
  app.get("/aircraft/:registration", async (request, reply) => {
    const { registration } = request.params as {
      registration: string;
    };

    if (registration.length < 5) {
      return reply.status(400).send({
        message: "Invalid aircraft registration",
      });
    }

    const aircraft = await findAircraftByRegistration(registration);

    if (!aircraft) {
      return reply.status(404).send({
        error: "NOT_FOUND",
        message: "Aircraft not found",
      });
    }

    return aircraft;
  });
}
