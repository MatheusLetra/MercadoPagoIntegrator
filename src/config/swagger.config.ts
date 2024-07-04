import {FastifySwaggerUiOptions} from '../lib/fastify.lib'

export const SwaggerLayout = {
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
    host: `localhost:${process.env.SERVER_PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
};

export const SwaggerOptions: FastifySwaggerUiOptions = {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  }
}