import { FastifyRequest, FastifyReply } from "../../lib/fastify.lib";

import { generateUUIDToken } from "../../utils/uuid";

export const IdempotencyKeyController = {

  async generateIdempotencyKey(req: FastifyRequest, res: FastifyReply) {

    let idempotencyKey = await generateUUIDToken();

    res.status(200).send({ idempotency_key: idempotencyKey })
  }

}