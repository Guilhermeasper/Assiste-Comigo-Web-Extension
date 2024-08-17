import SocketManager from '@background/socket-manager';
import { Handler } from '@shared/types';

export const play: Handler = {
  event: 'play',
  origin: 'content',
  bidirectional: false,
  handler: (payload: unknown) => {
    console.log('play', payload);
    const socketManager = SocketManager.getInstance();
    socketManager.sendMessage('play', payload);
    return true;
  },
};
