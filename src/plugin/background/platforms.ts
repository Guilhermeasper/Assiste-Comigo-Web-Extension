export const ASSISTE_COMIGO_PLATFORMS = [
  'youtube',
  'primevideo',
  'anitube',
  'viki',
  'vimeo',
  'crunchyroll',
  'netflix',
  'appletv',
  'goyabu',
  'mubi',
  '4anime',
];

interface PlatformSelectorMap {
  [platform: string]: string;
}

export const ASSISTE_COMIGO_PLATFORMS_SELECTOR: PlatformSelectorMap = {
  youtube: 'video.video-stream.html5-main-video',
};
