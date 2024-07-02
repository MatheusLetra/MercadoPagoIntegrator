import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";

import { Options } from "../config/swagger.config";

import router from "../routes/router";


const app = fastify();

app.register(fastifySwagger, Options);

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  }
});

app.register(router, {})

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running...");
})