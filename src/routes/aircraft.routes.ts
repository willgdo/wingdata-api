import { FastifyInstance } from "fastify";
import { findAircraftByRegistration } from "../services/aircraft.services";

export async function aircraftRoutes(app: FastifyInstance) {
  app.get("/aircraft/:registration", async (request, reply) => {
    const { registration } = request.params as {
      registration: string;
    };

    const aircraft = await findAircraftByRegistration(registration);

    if (!aircraft) {
      return reply.status(404).send({
        message: "Aircraft not found",
      });
    }

    return aircraft;
  });
}
