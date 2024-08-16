import { Handler } from '@shared/types';

export const pause: Handler = {
  event: 'pause',
  origin: 'content',
  bidirectional: false,
  handler: (payload: unknown) => {
    console.log('pause', payload);
    return true;
  },
};
