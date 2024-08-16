import { Handler } from '@shared/types';
import * as platforms from '@content/platforms';

export const watching: Handler = {
  event: 'watching',
  origin: 'background',
  bidirectional: true,
  handler: (payload: unknown) => {
    const platformName = (payload as any)?.platform;

    const platform = Array.from(Object.values(platforms)).find(
      (p) => p.name === platformName,
    );

    return { watching: platform?.isWatching() };
  },
};
