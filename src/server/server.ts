import 'dotenv/config'
import { fastify, fastifySwagger, fastifySwaggerUI } from '../lib/fastify.lib'
import { SwaggerLayout, SwaggerOptions } from "../config/swagger.config";
import MercadoPagoRouter from "../routes/mercadopago.routes";
import HealthRouter from '../routes/health.routes';

const app = fastify();
app.register(fastifySwagger, SwaggerLayout);
app.register(fastifySwaggerUI, SwaggerOptions);
app.register(HealthRouter, {})
app.register(MercadoPagoRouter, {})

app.listen({ port: process.env.SERVER_PORT as number | undefined }).then(() => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
})