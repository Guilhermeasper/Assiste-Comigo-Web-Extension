import { Origin } from './origin.type';

export type Handler = {
  event: string;
  origin: Origin;
  bidirectional: boolean;
  handler: (payload: unknown) => unknown | Promise<unknown>;
};
