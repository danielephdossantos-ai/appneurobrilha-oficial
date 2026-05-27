
export interface WordData {
  id: string;
  word: string;
  syllables: string[];
  imageUrl: string;
  difficulty: 1 | 2 | 3;
  category: 'animals' | 'objects' | 'food' | 'nature';
}

export const WORDS: WordData[] = [
  {
    id: 'w-1',
    word: 'BOLA',
    syllables: ['BO', 'LA'],
    imageUrl: 'https://images.unsplash.com/photo-1589382278257-ca4b16abeb8c?auto=format&fit=crop&q=80&w=200',
    difficulty: 1,
    category: 'objects'
  },
  {
    id: 'w-2',
    word: 'CASA',
    syllables: ['CA', 'SA'],
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=200',
    difficulty: 1,
    category: 'objects'
  },
  // Simulate 500 activities base
  ...Array.from({ length: 350 }).map((_, i) => ({
    id: `w-extra-${i}`,
    word: `PALAVRA${i}`,
    syllables: ['PA', 'LA', 'VRA'],
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=200',
    difficulty: (i % 3 + 1) as 1 | 2 | 3,
    category: 'objects' as any
  }))
];
