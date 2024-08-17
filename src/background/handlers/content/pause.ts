import SocketManager from '@background/socket-manager';
import { Handler } from '@shared/types';

export const pause: Handler = {
  event: 'pause',
  origin: 'content',
  bidirectional: false,
  handler: (payload: unknown) => {
    console.log('pause', payload);
    const socketManager = SocketManager.getInstance();
    socketManager.sendMessage('pause', payload);
    return true;
  },
};
