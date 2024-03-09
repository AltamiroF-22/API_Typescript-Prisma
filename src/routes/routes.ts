import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCustomerController } from "../controllers/createCustomerController";
import { ListCustomersController } from "../controllers/listCustomersController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  
  // test route
  fastify.get("/test", async (req: FastifyRequest, res: FastifyReply) => {
    return { ok: true };
  });

  //create customer route
  fastify.post("/customer", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateCustomerController().handle(req, res);
  });

  // get all customers
  fastify.get("/customers", async (req: FastifyRequest, res: FastifyReply) => {
    return new ListCustomersController().handle(req, res);
  });
}