import { speakChunked, stopSpeaking } from "@/lib/native-tts";

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
}

export class AudioSpeechService {
  /** Standard TTS — used by legacy + activity players */
  static async speak(text: string, onEnd?: () => void): Promise<void> {
    await speakChunked(text, { rate: 0.95, pitch: 1.15 });
    onEnd?.();
  }

  /** Custom rate/pitch — used by EarlyChildhoodPlayer for young children */
  static async speakWithOptions(text: string, opts: SpeechOptions): Promise<void> {
    await speakChunked(text, opts);
  }

  static stop(): void {
    stopSpeaking();
  }
}
