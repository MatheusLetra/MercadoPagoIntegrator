import { FastifyInstance, FastifyListenOptions } from "../lib/fastify.lib";

import { HealthController } from "../controllers/health/health.controller";

const HealthRouter = async (app: FastifyInstance, opts: FastifyListenOptions) => {
  app.get('/health', HealthController.healthStatus);
}

export default HealthRouter;