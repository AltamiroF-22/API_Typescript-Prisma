import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/deleteCustomerService";

class DeleteCustomerController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.query as { id: string };

    const custumerService = new DeleteCustomerService();
    const customer = await custumerService.execute({ id });

    res.send(customer);
  }
}

export { DeleteCustomerController };
