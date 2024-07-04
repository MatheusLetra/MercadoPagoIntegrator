const generateIdempotencyKeySchema = {
  description: 'Generate a idempotency-key, this function allows you to repeat requests safely, without the risk of carrying out the same action more than once by mistake. This is useful to avoid errors, such as creating two identical payments, for example. To ensure that each request is unique, it is important to use a unique value in your request header.',
  tags: ['Idempotency-key'],
  summary: 'Creates new idempotency-key',
  response: {
    201: {
      description: 'Idempotency-key Created Response',
      type: 'object',
      properties: {
        idempotency_key: { type: 'string' }
      }
    }
  }
}

export { generateIdempotencyKeySchema };
