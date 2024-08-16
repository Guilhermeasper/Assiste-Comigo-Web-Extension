import { Orchestrator } from '@shared/orchestrator';
import { Handler } from '@shared/types';
import * as handlers from '@content/handlers';

const orchestrator = Orchestrator.getInstance();

export function registerHandlers() {
  Array.from(Object.values(handlers)).forEach((handler: Handler) => {
    orchestrator.register(
      handler.event,
      handler.origin,
      handler.handler,
      handler.bidirectional,
    );
  });
}
