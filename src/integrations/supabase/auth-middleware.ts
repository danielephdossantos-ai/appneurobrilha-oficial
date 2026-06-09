import { createMiddleware } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'

export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    const request = getRequest();

    if (!request?.headers) {
      throw new Error('Unauthorized: No request headers available');
    }

    const userId = request.headers.get('x-replit-user-id');

    if (!userId) {
      throw new Error('Unauthorized: Not authenticated');
    }

    return next({
      context: {
        userId,
        claims: { sub: userId },
      },
    });
  },
);
