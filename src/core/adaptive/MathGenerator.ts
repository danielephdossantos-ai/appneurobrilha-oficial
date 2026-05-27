
import { MATH_ACTIVITIES, MathActivity } from '@/data/math/activities';
import { NeuroProfile } from '../neuro/engine';

export class MathGenerator {
  static generateActivity(world: string, profile: NeuroProfile, difficulty: number): MathActivity {
    const worldActivities = MATH_ACTIVITIES.filter(a => a.world === world || world === 'all');
    const suitable = worldActivities.filter(a => a.difficulty <= difficulty);
    
    const base = suitable.length > 0 
      ? suitable[Math.floor(Math.random() * suitable.length)]
      : MATH_ACTIVITIES[0];

    return this.applyNeuroAdaptation(base, profile);
  }

  private static applyNeuroAdaptation(activity: MathActivity, profile: NeuroProfile): MathActivity {
    const adapted = { ...activity, data: { ...activity.data } };

    // TEA Adaptation: Predictability and focus
    if (profile.type === 'tea') {
      adapted.data.maxItems = Math.min(adapted.data.maxItems || 4, 3);
      adapted.data.showTimer = false;
      adapted.sensoryAdaptation = { lowStimulus: true, highContrast: false };
    }

    // TDAH Adaptation: Fast feedback and short bursts
    if (profile.type === 'tdah') {
      adapted.data.maxItems = Math.min(adapted.data.maxItems || 6, 4);
      adapted.data.rewardFrequency = 'high';
    }

    // Generic adaptive rules
    if (activity.type === 'counting' && profile.supportLevel > 1) {
      adapted.data.hasVisualAids = true; // Show numbers next to items being counted
    }

    return adapted;
  }

  static generateSequence(count: number, difficulty: number): MathActivity[] {
    // Generate a progressive learning path
    const sequence: MathActivity[] = [];
    for (let i = 0; i < count; i++) {
      const currentDifficulty = Math.min(difficulty + Math.floor(i / 3), 5);
      // Pick a random world for the sequence
      const worlds = ['counting', 'comparison', 'shapes', 'logic'];
      const world = worlds[i % worlds.length];
      sequence.push(this.generateActivity(world, { type: 'standard', supportLevel: 1 } as any, currentDifficulty));
    }
    return sequence;
  }
}
