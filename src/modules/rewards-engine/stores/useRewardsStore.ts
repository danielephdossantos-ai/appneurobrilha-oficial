import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RewardsState {
  stars: number;
  coins: number;
  unlockedItems: string[];
  addStars: (amount: number) => void;
  addCoins: (amount: number) => void;
  unlockItem: (itemId: string) => void;
}

export const useRewardsStore = create<RewardsState>()(
  persist(
    (set) => ({
      stars: 0,
      coins: 0,
      unlockedItems: [],
      addStars: (amount) => set((state) => ({ stars: state.stars + amount })),
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      unlockItem: (itemId) =>
        set((state) => ({
          unlockedItems: state.unlockedItems.includes(itemId)
            ? state.unlockedItems
            : [...state.unlockedItems, itemId],
        })),
    }),
    {
      name: "rewards-storage",
    },
  ),
);
