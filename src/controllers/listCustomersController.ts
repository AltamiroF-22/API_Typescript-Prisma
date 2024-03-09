import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/listCustomersService";

class ListCustomersController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const listCustomersService = new ListCustomersService();

    const customers = await listCustomersService.execute();

    res.send(customers);
  }
}

export { ListCustomersController };
