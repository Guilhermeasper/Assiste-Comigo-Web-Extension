import { AssisteComigoPlayer } from '@content/player';
import { Handler } from '@shared/types';

export const play: Handler = {
  event: 'play',
  origin: 'background',
  bidirectional: false,
  handler: (payload: unknown) => {
    AssisteComigoPlayer.getInstance().serverPlay = true;
    AssisteComigoPlayer.getInstance().play();
  },
};
