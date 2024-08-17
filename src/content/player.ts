import { Orchestrator } from '@shared/orchestrator';
import { platform } from 'os';

export class AssisteComigoPlayer {
  orchestrator = Orchestrator.getInstance();
  platform = { name: '' };
  videoElement: HTMLVideoElement | null = null;

  // this class should be a singleton
  static instance: AssisteComigoPlayer;
  static getInstance(platform: any = null): AssisteComigoPlayer {
    if (!AssisteComigoPlayer.instance) {
      AssisteComigoPlayer.instance = new AssisteComigoPlayer(platform);
    }
    return AssisteComigoPlayer.instance;
  }

  private constructor(platform: any) {
    this.platform = platform;
    this.videoElement = platform.videoElement();
  }

  play() {
    this.videoElement?.play();
  }

  pause() {
    this.videoElement?.pause();
  }

  seek(time: number) {
    console.log(`Seeking to ${time}`);
  }

  onPlay(): void {
    try {
      this.orchestrator.sendMessage(
        'play',
        { platform: this.platform.name },
        'content',
        () => {},
      );
    } catch (error) {
      console.error(error);
    }
  }

  onPause(): void {
    try {
      this.orchestrator.sendMessage(
        'pause',
        { platform: this.platform.name },
        'content',
        () => {},
      );
    } catch (error) {
      console.error(error);
    }
  }

  onSeek(): void {
    try {
      this.orchestrator.sendMessage(
        'seek',
        { platform: this.platform.name },
        'content',
        () => {},
      );
    } catch (error) {
      console.error(error);
    }
  }

  appendListeners() {
    this.videoElement?.addEventListener('play', this.onPlay.bind(this));
    this.videoElement?.addEventListener('pause', this.onPause.bind(this));
    this.videoElement?.addEventListener('seeked', this.onSeek.bind(this));
  }

  setVolume(volume: number) {
    console.log(`Setting volume to ${volume}`);
  }

  getVolume() {
    console.log('Getting volume');
  }

  getDuration() {
    console.log('Getting duration');
  }

  getCurrentTime() {
    console.log('Getting current time');
  }

  getPlaybackRate() {
    console.log('Getting playback rate');
  }

  setPlaybackRate(rate: number) {
    console.log(`Setting playback rate to ${rate}`);
  }

  getVideoInfo() {
    console.log('Getting video info');
  }
}
