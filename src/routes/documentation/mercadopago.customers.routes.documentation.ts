const createACustomerSchema = {
  description: 'Create a new customer',
  tags: ['Customers'],
  summary: 'Creates new Customer with given values',
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' }
    },
    required: ['email']
  },
  response: {
    201: {
      description: 'Customer Created Response',
      type: 'object',
      properties: {
        id: { type: 'string' },
        email: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        phone: {
          type: 'object',
          properties: {
            area_code: { type: 'number' },
            number: { type: 'number' }
          }
        },
        identification: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            number: { type: 'number' }
          }
        },
        address: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            zip_code: { type: 'string' },
            street_name: { type: 'string' }
          }
        },
        description: { type: 'string' },
        date_created: { type: 'string' },
        metadata: {
          type: 'object',
          properties: {
            source_sync: { type: 'string' }
          }
        },
        default_address: { type: 'string' },
        cards: { type: 'array' },
        addresses: { type: 'array' },
        live_mode: { type: 'boolean' }
      }
    },
    400: {
      description: 'Customer Creating Error Response',
      type: 'object',
      properties: {
        message: { type: 'string' },
        error: { type: 'string' },
        status: { type: 'number' },
        cause: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              code: { type: 'number' },
              description: { type: 'string' },
              data: { type: 'string' }
            }
          }
        }
      }
    },
    500: {
      description: 'Customer Server Error',
      type: 'object',
      properties: {
        message: { type: 'string' },
        status: { type: 'number' }
      }
    }
  }
};

export { createACustomerSchema };
