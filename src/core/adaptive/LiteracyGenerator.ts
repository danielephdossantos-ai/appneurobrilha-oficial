import { PHONEMES } from '@/data/literacy/phonemes';
import { SYLLABLES } from '@/data/literacy/syllables';
import { WORDS } from '@/data/literacy/words';
import { SENTENCES } from '@/data/literacy/sentences';

export class LiteracyGenerator {
  static generatePhonemicActivity(level: number) {
    const subset = PHONEMES.filter(p => level <= 1 ? p.letter.match(/[AEIOU]/) : true);
    return subset[Math.floor(Math.random() * subset.length)];
  }

  static generateSyllabicActivity(type: 'simple' | 'complex') {
    const subset = SYLLABLES.filter(s => s.type === type);
    return subset[Math.floor(Math.random() * subset.length)];
  }

  static generateWordActivity(difficulty: number) {
    const subset = WORDS.filter(w => w.difficulty <= difficulty);
    return subset[Math.floor(Math.random() * subset.length)];
  }

  static generateReadingActivity(difficulty: number) {
    const subset = SENTENCES.filter(s => s.difficulty <= difficulty);
    return subset[Math.floor(Math.random() * subset.length)];
  }

  static generateVariation(baseActivity: any) {
    // This function can shuffle options, change colors, or modify prompts 
    // to avoid visual repetition while keeping the same pedagogical goal.
    return {
      ...baseActivity,
      variationId: Math.random().toString(36).substr(2, 9),
      seed: Math.random()
    };
  }
}
