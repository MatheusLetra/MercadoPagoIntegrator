import { FastifyInstance, FastifyListenOptions } from "fastify";
import { TestRoutes } from "./TestRoutes";

const router = async (app: FastifyInstance, opts: FastifyListenOptions) => {
  app.get('/', TestRoutes.Main)
}


export default router;