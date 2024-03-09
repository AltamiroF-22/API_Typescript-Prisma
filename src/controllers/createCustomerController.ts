import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ name, email });

    res.send(customer);
  }
}

export { CreateCustomerController };
