export class AudioSpeechService {
  private static synth = window.speechSynthesis;

  static async speak(text: string, onEnd?: () => void): Promise<void> {
    return new Promise((resolve) => {
      // Cancel any ongoing speech
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR'; // Focus on Brazilian Portuguese
      utterance.rate = 0.9; // Slightly slower for kids
      utterance.pitch = 1.2; // A bit higher for a friendly mascot voice

      utterance.onend = () => {
        onEnd?.();
        resolve();
      };

      utterance.onerror = () => {
        resolve(); // Resolve anyway to not block the flow
      };

      this.synth.speak(utterance);
    });
  }

  static stop(): void {
    this.synth.cancel();
  }
}
