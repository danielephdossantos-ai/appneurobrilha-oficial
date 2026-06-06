export class AudioSpeechService {
  private static getSynth(): SpeechSynthesis | null {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    return window.speechSynthesis;
  }

  static async speak(text: string, onEnd?: () => void): Promise<void> {
    return new Promise((resolve) => {
      const synth = this.getSynth();
      if (!synth) {
        onEnd?.();
        resolve();
        return;
      }

      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1.2;

      utterance.onend = () => {
        onEnd?.();
        resolve();
      };

      utterance.onerror = () => resolve();

      synth.speak(utterance);
    });
  }

  static stop(): void {
    this.getSynth()?.cancel();
  }
}
