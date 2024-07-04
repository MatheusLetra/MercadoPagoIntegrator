import { FastifyRequest, FastifyReply } from "../../lib/fastify.lib";

export const PaymentsController = {

  async paymentsCreate(req: FastifyRequest, res: FastifyReply) {
    res.status(200).send({ message: "Create a payment" })
  }

}