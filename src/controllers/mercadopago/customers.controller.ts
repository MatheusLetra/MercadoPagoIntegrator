import { FastifyRequest, FastifyReply } from "../../lib/fastify.lib";
import { ICustomerFindAndCreateBody, ICustomerFindByCustomerIdBody } from "../../interfaces/customers.interfaces";
import CustomerModel from "../../models/customers.model";

export const CustomersController = {

  async findByCustomerId(req: FastifyRequest<{ Body: ICustomerFindByCustomerIdBody }>, res: FastifyReply) {
    const { body } = req;

    const customerModel = new CustomerModel();

    let result = await customerModel.findByCustomerId(body.customerId);

    res.status(customerModel.status).send(result);
  },
  async findByEmail(req: FastifyRequest<{ Body: ICustomerFindAndCreateBody }>, res: FastifyReply) {
    const { body } = req;

    const customerModel = new CustomerModel();

    let result = await customerModel.findByEmail(body.email);

    res.status(customerModel.status).send(result);
  },
  async create(req: FastifyRequest<{ Body: ICustomerFindAndCreateBody }>, res: FastifyReply) {
    const { body } = req;

    const customerModel = new CustomerModel();

    let result = await customerModel.create(body);

    res.status(customerModel.status).send(result);
  }

}