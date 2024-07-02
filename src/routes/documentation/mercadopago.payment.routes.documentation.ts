const createAPaymentSchema = {
  description: 'Create a new payment',
  tags: ['Payments'],
  summary: 'Creates new payment with given values',
  body: {
    type: 'object',
    properties: {
      payment: {
        type: 'object',
        properties: {
          transaction_amount: { type: 'number' },
          description: { type: 'string' },
          payment_method_id: { type: 'string' },
          payer: {
            type: 'object',
            properties: {
              email: { type: 'string' }
            }
          }
        },
        required: ['transaction_amount', 'description', 'payment_method_id', 'payer']
      },
      security: {
        type: 'object',
        properties: {
          idempotencyKey: { type: 'string' }
        },
        required: ['idempotencyKey']
      }
    },
    required: ['payment', 'security']
  },
  response: {
    201: {
      description: 'Payment Created Response',
      type: 'object',
      properties: {
        id: { type: 'number' },
        payment_method_id: { type: 'string' },
        qr_code: { type: 'string' },
        qr_code_base64: { type: 'string' }
      }
    },
    400: {
      description: 'Payment Creating Error Response',
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
      description: 'Payment Creating Server Error',
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    }
  }
}

export { createAPaymentSchema };
