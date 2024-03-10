import Fastify from "fastify";
import { routes } from "./routes/routes";
import cors from "@fastify/cors";

const PORT = 4040;
const app = Fastify({ logger: true });

// middleware
app.setErrorHandler((err, req, res) => {
  res.status(400).send({ message: err.message });
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    await app.listen({ port: PORT });
  } catch (err) {
    process.exit(1);
  }
};

start();
