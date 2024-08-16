import { Handler } from '@shared/types';

export const getHostname: Handler = {
  event: 'get-hostname',
  origin: 'background',
  bidirectional: true,
  handler: (payload: unknown) => {
    const hostname = document.location.hostname;
    return { hostname };
  },
};
