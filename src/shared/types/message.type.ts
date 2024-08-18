import { Origin } from './origin.type';

export type AssisteComigoMessage<T> = {
  type: string;
  payload?: T;
  source: Origin;
};
