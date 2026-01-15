import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => {
  return { status: "ok", service: "WingData API" };
});

app.listen({ port: 3000 }, () => {
  console.log("✈️ WingData API running on http://localhost:3000");
});
