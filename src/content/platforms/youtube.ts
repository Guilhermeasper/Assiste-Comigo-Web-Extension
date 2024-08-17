const YOUTUBE_PLAYER_SELECTOR = 'video.html5-main-video';
const getYoutubePlayer = () => document.querySelector(YOUTUBE_PLAYER_SELECTOR);

export const youtube = {
  name: 'youtube',
  isWatching: () => {
    const playerFound = getYoutubePlayer() instanceof HTMLVideoElement;
    const onWatchPage = document.location.pathname === '/watch';

    return onWatchPage && playerFound;
  },
  videoElement: getYoutubePlayer,
};
