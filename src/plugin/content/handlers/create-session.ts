import { Handler } from '@shared/types';
import * as platforms from '@content/platforms';
import { Orchestrator } from '@shared/orchestrator';

const orchestrator = Orchestrator.getInstance();

export const createSession: Handler = {
  event: 'create-session',
  origin: 'background',
  bidirectional: true,
  handler: (payload: unknown) => {
    const platformName = (payload as any)?.platform;

    const platform = Array.from(Object.values(platforms)).find(
      (p) => p.name === platformName,
    );

    const onPlay = (): void => {
      try {
        orchestrator.sendMessage(
          'play',
          { platform: platformName },
          'content',
          () => {},
        );
      } catch (error) {
        console.error(error);
      }
    };

    const onPause = (): void => {
      try {
        orchestrator.sendMessage(
          'pause',
          { platform: platformName },
          'content',
          () => {},
        );
      } catch (error) {
        console.error(error);
      }
    };

    const onSeek = (): void => {
      try {
        orchestrator.sendMessage(
          'seek',
          { platform: platformName },
          'content',
          () => {},
        );
      } catch (error) {
        console.error(error);
      }
    };

    platform?.appendListeners(onPlay, onPause, onSeek);

    return { created: true };
  },
};
