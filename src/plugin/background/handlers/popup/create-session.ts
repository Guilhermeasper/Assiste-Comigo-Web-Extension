import { Orchestrator } from '@shared/orchestrator';
import { Handler } from '@shared/types';

const orchestrator = Orchestrator.getInstance();

export const createSession: Handler = {
  event: 'create-session',
  origin: 'popup',
  bidirectional: true,
  handler: (payload: unknown) => {
    const createSessionResponse = orchestrator.sendMessageToActiveTab({
      type: 'create-session',
      payload: { platform: (payload as any)?.platform },
      source: 'background',
    });

    return createSessionResponse;
  },
};
