// src/utils/errors.ts
export class UpdateServiceError extends Error {
    constructor(message: string, public cause?: Error) {
      super(message)
      this.name = 'UpdateServiceError'
    }
  }
