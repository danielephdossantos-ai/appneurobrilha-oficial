import type { AulaIng, UnidadeIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import dog from "@/assets/ingles-ei/n1-week3/dog.png";
import cat from "@/assets/ingles-ei/n1-week3/cat.png";
import bird from "@/assets/ingles-ei/n1-week3/bird.png";
import fish from "@/assets/ingles-ei/n1-week3/fish.png";

/**
 * Nível 1 · Semana 3 — Baby Animals
 * Onomatopeias ajudam a fixar o vocábulo (Werker & Tees 1984 · fase sensível).
 */

const n1S3A01: AulaIng = {
  slug: "n1-s3-a01-dog-cat",
  titulo: "Dog & Cat",
  subtitulo: "Nível 1 · Semana 3 · Dia 1",
  icone: "🐶",
  duracaoMin: 4,
  baseCientifica:
    "Sons de animais são âncoras multimodais fortes (Paivio — dual coding).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi, baby! Hoje dois amiguinhos: "dog" e "cat". "Dog" é cachorro, faz woof-woof. "Cat" é gato, faz meow.',
      legenda: "Imita o som quando ouvir cada palavra.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca no cachorrinho: "dog". Toca no gatinho: "cat".',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: dog },
        { en: "Cat", pt: "Gato", imagemUrl: cat },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'De novo, agora com o som: "dog" (woof!)… "cat" (meow!).',
      itens: [
        { en: "Dog", pt: "Cachorro", imagemUrl: dog },
        { en: "Cat", pt: "Gato", imagemUrl: cat },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "dog".',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: dog, correta: true },
        { nome: "gato", imagemUrl: cat, correta: false },
      ],
      feedbackAcerto: 'Yes! Esse é o "dog", woof-woof!',
      feedbackErro: '"Dog" faz woof. Toca no cachorrinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca no que é "cat".',
      palavraAlvoEn: "Cat",
      opcoes: [
        { nome: "gato", imagemUrl: cat, correta: true },
        { nome: "cachorro", imagemUrl: dog, correta: false },
      ],
      feedbackAcerto: 'Yes! Esse é o "cat", meow!',
      feedbackErro: '"Cat" faz meow. Toca no gatinho.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: dog,
      convite:
        'Vira "dog" e fala "woof, woof!". Depois vira "cat" e fala "meow!".',
      dica: "Pode andar de quatro se quiser. É brincadeira!",
    },
    {
      tipo: "celebracao",
      medalha: "Baby Animals — Dog & Cat",
      mascoteUrl: brilha,
      falaFinal: 'Woof! Meow! Você já conhece "dog" e "cat" em inglês!',
    },
  ],
};

const n1S3A02: AulaIng = {
  slug: "n1-s3-a02-bird-fish",
  titulo: "Bird & Fish",
  subtitulo: "Nível 1 · Semana 3 · Dia 2",
  icone: "🐦",
  duracaoMin: 4,
  baseCientifica:
    "Reciclagem: 'dog'/'cat' voltam na revisão. Contraste de habitat (céu × água) ajuda a memória semântica.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi again! Hoje mais dois amiguinhos: "bird" e "fish". "Bird" é passarinho, voa no céu. "Fish" é peixinho, nada na água.',
      legenda: "Balança os braços como asas quando ouvir 'bird'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca no passarinho: "bird". Toca no peixinho: "fish".',
      itens: [
        { en: "Bird", pt: "Passarinho", imagemUrl: bird },
        { en: "Fish", pt: "Peixe", imagemUrl: fish },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete comigo: "bird"… "fish".',
      itens: [
        { en: "Bird", pt: "Passarinho", imagemUrl: bird },
        { en: "Fish", pt: "Peixe", imagemUrl: fish },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toca no que é "bird".',
      palavraAlvoEn: "Bird",
      opcoes: [
        { nome: "passarinho", imagemUrl: bird, correta: true },
        { nome: "peixe", imagemUrl: fish, correta: false },
      ],
      feedbackAcerto: 'Yes! O "bird" voa no céu.',
      feedbackErro: '"Bird" é o que voa. Toca no passarinho.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Agora toca no que é "fish".',
      palavraAlvoEn: "Fish",
      opcoes: [
        { nome: "peixe", imagemUrl: fish, correta: true },
        { nome: "cachorro", imagemUrl: dog, correta: false },
        { nome: "gato", imagemUrl: cat, correta: false },
      ],
      feedbackAcerto: 'Yes! O "fish" nada na água.',
      feedbackErro: '"Fish" é o peixinho. Toca nele.',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: fish,
      convite:
        'Fala os 4 amiguinhos alto: "dog"… "cat"… "bird"… "fish"! Faz o som de cada um.',
      dica: "Woof, meow, tweet, blub-blub!",
    },
    {
      tipo: "celebracao",
      medalha: "Baby Animals — Zoo Star",
      mascoteUrl: brilha,
      falaFinal:
        'Congratulations! 4 amiguinhos em inglês: "dog", "cat", "bird", "fish". You are an Animal Star!',
    },
  ],
};

export const n1Semana3: UnidadeIng = {
  slug: "n1-semana-3",
  numero: 3,
  titulo: "Semana 3 — Animals",
  subtitulo: "Amiguinhos: dog, cat, bird, fish",
  aulas: [n1S3A01, n1S3A02],
};
