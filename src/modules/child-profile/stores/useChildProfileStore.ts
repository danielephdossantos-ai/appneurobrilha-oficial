import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChildProfile } from '../types';

interface ChildProfileState {
  activeChildId: string | null;
  children: ChildProfile[];
  setActiveChildId: (id: string | null) => void;
  setChildren: (children: ChildProfile[]) => void;
}

export const useChildProfileStore = create<ChildProfileState>()(
  persist(
    (set) => ({
      activeChildId: null,
      children: [],
      setActiveChildId: (id: string | null) => set({ activeChildId: id }),
      setChildren: (children: ChildProfile[]) => set({ children }),
    }),
    {
      name: 'child-profile-storage',
    }
  )
);
