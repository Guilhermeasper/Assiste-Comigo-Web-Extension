import { Orchestrator } from '@shared/orchestrator';
import { Handler } from '@shared/types';

const orchestrator = Orchestrator.getInstance();

export const pause: Handler = {
  event: 'pause',
  origin: 'popup',
  bidirectional: false,
  handler: (payload: unknown) => {
    orchestrator.sendMessageToActiveTab({
      type: 'pause',
      payload,
      source: 'background',
    });
    return true;
  },
};
