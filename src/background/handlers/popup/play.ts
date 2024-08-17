import { Orchestrator } from '@shared/orchestrator';
import { Handler } from '@shared/types';

const orchestrator = Orchestrator.getInstance();

export const play: Handler = {
  event: 'play',
  origin: 'popup',
  bidirectional: false,
  handler: (payload: unknown) => {
    orchestrator.sendMessageToActiveTab({
      type: 'play',
      payload,
      source: 'background',
    });
    return true;
  },
};
