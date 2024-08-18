import { Origin } from '@shared/types';

export class BackgroundBaseMessage {
  type: string;
  payload: unknown;
  source: Origin;

  constructor(type: string, payload: unknown = null) {
    this.type = type;
    this.payload = payload;
    this.source = 'background';
  }
}
