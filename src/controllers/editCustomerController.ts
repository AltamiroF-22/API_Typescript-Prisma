import { FastifyRequest, FastifyReply } from "fastify";
import { EditCustomerService } from "../services/editCustomerService";

class EditCustomerController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };
    const { id } = req.query as { id: string };

    const customerService = new EditCustomerService();
    const customer = customerService.execute({ id, name, email });

    return customer;
  }
}

export { EditCustomerController };
