import { FastifyRequest, FastifyReply } from "../../lib/fastify.lib";
import { customerCreateBody } from "../../interfaces/customers.interfaces";
import CustomerModel from "../../models/customers.model";

export const CustomersController = {

  async create(req: FastifyRequest<{ Body: customerCreateBody }>, res: FastifyReply) {
    const { body } = req;

    const customerModel = new CustomerModel();

    let result = await customerModel.create(body);

    res.status(customerModel.status).send(result)
  }

}