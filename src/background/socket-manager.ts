import { io, Socket } from 'socket.io-client';

class SocketManager {
  private static instance: SocketManager;
  private socket: Socket | null;

  private constructor() {
    try {
      this.socket = io('http://localhost:3000', { transports: ['websocket'] }); // Replace with your server URL
      console.log(this.socket.connected);
      this.initializeHandlers();
    } catch (error) {
      this.socket = null;
    }
  }

  public static getInstance(): SocketManager {
    if (!SocketManager.instance) {
      SocketManager.instance = new SocketManager();
    }
    return SocketManager.instance;
  }

  private initializeHandlers(): void {
    this.socket?.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket?.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    this.socket?.on('error', (error: any) => {
      console.error('An error occurred:', error);
    });

    // Add more event handlers here
  }

  public sendMessage(event: string, data: any): void {
    this.socket?.emit(event, data);
  }

  public onMessage(event: string, handler: (data: any) => void): void {
    this.socket?.on(event, handler);
  }
}

export default SocketManager;
