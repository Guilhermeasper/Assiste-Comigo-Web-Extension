const YOUTUBE_PLAYER_SELECTOR = 'video.html5-main-video';
const getYoutubePlayer = () => document.querySelector(YOUTUBE_PLAYER_SELECTOR);

export const youtube = {
  name: 'youtube',
  isWatching: () => {
    const playerFound = getYoutubePlayer() instanceof HTMLVideoElement;
    const onWatchPage = document.location.pathname === '/watch';

    return onWatchPage && playerFound;
  },
  appendListeners: (
    onPlay: () => void,
    onPause: () => void,
    onSeek: () => void,
  ) => {
    const player = getYoutubePlayer();

    if (!player) {
      return;
    }

    player.addEventListener('play', onPlay);
    player.addEventListener('pause', onPause);
    player.addEventListener('seeked', onSeek);
    console.log('youtube listeners added');
  },
};
