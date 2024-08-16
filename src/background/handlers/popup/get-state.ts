import {
  ASSISTE_COMIGO_PLATFORMS,
  ASSISTE_COMIGO_PLATFORMS_SELECTOR,
} from '@background/platforms';
import { Orchestrator } from '@shared/orchestrator';
import { SessionStorage } from '@shared/storage';
import { Handler } from '@shared/types';

const orchestrator = Orchestrator.getInstance();

export const getState: Handler = {
  event: 'get-state',
  origin: 'popup',
  bidirectional: true,
  handler: async (payload: unknown): Promise<any> => {
    try {
      const activeSession = await SessionStorage.get<string>('activeSession');
      console.log(activeSession);
      if (!activeSession) {
        const hostnameResponse = await orchestrator.sendMessageToActiveTab({
          type: 'get-hostname',
          payload,
          source: 'background',
        });
        console.log('hostnameResponse:', hostnameResponse);
        const hostname = hostnameResponse?.hostname;
        if (!hostname) {
          return {
            type: 'unsupported-platform',
            payload: {},
            source: 'background',
          };
        } else {
          const platform = ASSISTE_COMIGO_PLATFORMS.find((platform) =>
            hostname.includes(platform),
          );

          if (!platform) {
            return {
              type: 'unsupported-platform',
              payload: {},
              source: 'background',
            };
          } else {
            const playerResponse = await orchestrator.sendMessageToActiveTab({
              type: 'watching',
              payload: {
                platform,
              },
              source: 'background',
            });
            const watching = playerResponse?.watching;
            if (!watching) {
              return {
                type: 'not-ready',
                payload: {},
                source: 'background',
              };
            } else {
              return {
                type: 'ready',
                payload: {
                  platform,
                  watching,
                },
                source: 'background',
              };
            }
          }
        }
      }
    } catch (error) {
      console.error('Error getting state:', error);
      return {
        type: 'unknown-error',
        payload: {},
        source: 'background',
      };
    }
  },
};
