import { registerHandlers } from '@content/handlers/register-handlers';

registerHandlers();

const contentScriptsOptions = {
  'www.primevideo.com': 'primevideo',
  'www.anitube.site': 'anitube',
  'www.youtube.com': 'youtube',
  'www.viki.com': 'viki',
  'vimeo.com': 'vimeo',
  'www.crunchyroll.com': 'crunchyroll',
  'www.netflix.com': 'netflix',
  'tv.apple.com': 'appletv',
  'goyabu.com': 'goyabu',
  'mubi.com': 'mubi',
  '4anime.to': '4anime',
};

console.log('Content script started');
