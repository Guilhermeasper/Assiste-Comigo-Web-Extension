import { registerHandlers } from '@background/handlers/register-handlers';
import SocketManager from '@background/socket-manager';

registerHandlers();

self.addEventListener('install', function (event) {
  console.log('Service worker successfully installed.');
});

chrome.runtime.onInstalled.addListener(onInstalled);

function onInstalled(details: unknown) {
  console.log('Extension successfully installed.');

  const socketManager = SocketManager.getInstance();
}
