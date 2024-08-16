import { Handler } from '@shared/types';

export const play: Handler = {
  event: 'play',
  origin: 'content',
  bidirectional: false,
  handler: (payload: unknown) => {
    console.log('play', payload);
    return true;
  },
};
