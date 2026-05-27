
export interface PhonemeData {
  id: string;
  letter: string;
  sound: string; // URL for audio or phonetic representation
  phoneme: string;
  example: string;
  imageUrl: string;
  articulatoryHint: string; // Description of how to make the sound
}

export const PHONEMES: PhonemeData[] = [
  {
    id: 'p-1',
    letter: 'A',
    phoneme: '/a/',
    sound: '/audio/phonemes/a.mp3',
    example: 'Abelha',
    imageUrl: 'https://images.unsplash.com/photo-1558236714-d1ae5338166d?auto=format&fit=crop&q=80&w=200',
    articulatoryHint: 'Abra bem a boca como se fosse dar um grito de alegria!'
  },
  {
    id: 'p-2',
    letter: 'B',
    phoneme: '/b/',
    sound: '/audio/phonemes/b.mp3',
    example: 'Bola',
    imageUrl: 'https://images.unsplash.com/photo-1589382278257-ca4b16abeb8c?auto=format&fit=crop&q=80&w=200',
    articulatoryHint: 'Feche os lábios e solte o ar de repente, fazendo um "boom" suave.'
  },
  // Adding more phonemes to simulate a large database
  ...Array.from({ length: 24 }).map((_, i) => ({
    id: `p-extra-${i}`,
    letter: String.fromCharCode(67 + i), // C, D, E...
    phoneme: `/${String.fromCharCode(67 + i).toLowerCase()}/`,
    sound: `/audio/phonemes/${i}.mp3`,
    example: 'Exemplo',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=200',
    articulatoryHint: 'Dica articulatória dinâmica para neuroaprendizagem.'
  }))
];
