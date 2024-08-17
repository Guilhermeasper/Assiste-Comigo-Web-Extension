import { AssisteComigoPlayer } from '@content/player';
import { Handler } from '@shared/types';

export const pause: Handler = {
  event: 'pause',
  origin: 'background',
  bidirectional: false,
  handler: (payload: unknown) => {
    AssisteComigoPlayer.getInstance().serverPause = true;
    AssisteComigoPlayer.getInstance().pause();
  },
};
