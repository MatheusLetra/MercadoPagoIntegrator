export const Options = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Mercado Pago Integrator API',
      description: 'Building a Mercado Pago Integrator server application',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost:3333',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
};