import { create } from 'zustand';

interface SensoryState {
  contrast: 'normal' | 'high';
  audioEnabled: boolean;
  visualStimuli: 'standard' | 'reduced';
  setContrast: (contrast: 'normal' | 'high') => void;
  toggleAudio: () => void;
  setVisualStimuli: (level: 'standard' | 'reduced') => void;
}

export const useSensoryStore = create<SensoryState>((set) => ({
  contrast: 'normal',
  audioEnabled: true,
  visualStimuli: 'standard',
  setContrast: (contrast) => set({ contrast }),
  toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),
  setVisualStimuli: (level) => set({ visualStimuli: level }),
}));
