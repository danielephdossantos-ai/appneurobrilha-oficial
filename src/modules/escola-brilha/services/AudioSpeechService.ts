export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
}

export class AudioSpeechService {
  private static getSynth(): SpeechSynthesis | null {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    return window.speechSynthesis;
  }

  private static _speak(text: string, opts: SpeechOptions): Promise<void> {
    return new Promise((resolve) => {
      const synth = this.getSynth();
      if (!synth) { resolve(); return; }

      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate   = opts.rate   ?? 0.9;
      utterance.pitch  = opts.pitch  ?? 1.2;
      utterance.volume = opts.volume ?? 1.0;

      utterance.onend  = () => resolve();
      utterance.onerror = () => resolve();

      synth.speak(utterance);
    });
  }

  /** Standard TTS — used by legacy + activity players */
  static async speak(text: string, onEnd?: () => void): Promise<void> {
    const p = this._speak(text, { rate: 0.9, pitch: 1.2 });
    if (onEnd) p.then(onEnd);
    return p;
  }

  /** Custom rate/pitch — used by EarlyChildhoodPlayer for young children */
  static async speakWithOptions(text: string, opts: SpeechOptions): Promise<void> {
    return this._speak(text, opts);
  }

  static stop(): void {
    this.getSynth()?.cancel();
  }
}
