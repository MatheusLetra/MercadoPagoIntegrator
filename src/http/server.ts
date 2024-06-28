import fastify from "fastify";

import router from "./routes/router";

const app = fastify();

app.register(router, {})

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running...");
})


//https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-configuration/card/integrate-via-cardform#editor_8