import prismaClient from "../prisma";

interface EditCustomerProps {
  id: string;
  name?: string;
  email?: string;
}

class EditCustomerService {
  async execute({ id, name, email }: EditCustomerProps) {
    if (!id) {
      throw new Error("You can't edit a customer without id!");
    }

    const findCustomer = await prismaClient.customer.findUnique({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("This customer does not exist!");
    }

    const updateCustomer = await prismaClient.customer.update({
      where: {
        id: findCustomer.id,
      },
      data: {
        name: name || findCustomer.name,
        email: email || findCustomer.email,
        updated_at: new Date(),
      },
    });

    return updateCustomer;
  }
}

export { EditCustomerService };
