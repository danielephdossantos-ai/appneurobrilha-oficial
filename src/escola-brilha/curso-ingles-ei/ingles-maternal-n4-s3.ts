import type { AulaIng } from "./types";
import { url as brilha } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

/**
 * Inglês EI — Maternal · Nível 4 · Semana 3
 * "Look! It's a…" — apontar e descrever no mundo.
 */

const n4S3A01: AulaIng = {
  slug: "n4-s3-a01-look-animals",
  titulo: "Look! It's a dog!",
  subtitulo: "Nível 4 · Semana 3 · Dia 1",
  icone: "👀",
  duracaoMin: 6,
  baseCientifica:
    "Atenção conjunta ('Look!') é a base cognitiva do aprendizado lexical em L1 e L2 (Tomasello 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje a gente aponta e mostra as coisas em inglês. Fala: "Look! It\'s a dog!". "Look" quer dizer OLHA!',
      legenda: "Aponte para animais ou brinquedos ao redor.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "Look! It\'s a dog!", "Look! It\'s a cat!", "Look! It\'s a bird!".',
      itens: [
        { en: "It's a dog", pt: "É um cachorro", imagemUrl: cachorro },
        { en: "It's a cat", pt: "É um gato", imagemUrl: gato },
        { en: "It's a bird", pt: "É um passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Look! It\'s a dog!". Toca no "dog".',
      palavraAlvoEn: "Dog",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "passarinho", imagemUrl: passaro, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a dog!". Woof woof!',
      feedbackErro: 'O "dog" faz woof woof.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Look! It\'s a bird!". Toca no "bird".',
      palavraAlvoEn: "Bird",
      opcoes: [
        { nome: "passarinho", imagemUrl: passaro, correta: true },
        { nome: "coelho", imagemUrl: coelho, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a bird!". Tweet tweet!',
      feedbackErro: 'O "bird" voa e faz tweet tweet.',
    },
    {
      tipo: "historiaEn",
      titulo: "A walk in the park",
      cenas: [
        {
          imagemUrl: menina,
          narracao: 'Lily anda no parque. Ela aponta: "Look, mommy! It\'s a dog!".',
        },
        {
          imagemUrl: passaro,
          narracao: 'Depois ela vê uma coisa no céu: "Look! It\'s a bird! Tweet tweet!".',
        },
        {
          imagemUrl: coelho,
          narracao: 'De repente aparece: "Look! It\'s a rabbit!". Que passeio cheio de amigos!',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Sua vez! Aponta pra janela, pra rua ou pros brinquedos e fala pro adulto: "Look! It\'s a __!". Vale bicho de pelúcia!',
      dica: "Peça pro adulto responder 'Wow!'.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — Look!",
      mascoteUrl: brilha,
      falaFinal:
        'Wow! Você aponta e descreve em inglês: "Look! It\'s a dog!". You\'re amazing!',
    },
  ],
};

const n4S3A02: AulaIng = {
  slug: "n4-s3-a02-look-nature",
  titulo: "Look! It's a flower!",
  subtitulo: "Nível 4 · Semana 3 · Dia 2",
  icone: "🌸",
  duracaoMin: 6,
  baseCientifica:
    "Ampliar o frame a novos campos lexicais (natureza) consolida a fórmula 'It\\'s a __' como esquema produtivo (Tomasello 2003).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        'Hi! Hoje "Look!" no jardim. "Look! It\'s a tree!", "Look! It\'s a flower!".',
      legenda: "Se possível, olhe pela janela ao ouvir.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Escuta: "It\'s a tree", "It\'s a flower".',
      itens: [
        { en: "It's a tree", pt: "É uma árvore", imagemUrl: arvore },
        { en: "It's a flower", pt: "É uma flor", imagemUrl: flor },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Look! It\'s a tree!". Toca na "tree".',
      palavraAlvoEn: "Tree",
      opcoes: [
        { nome: "árvore", imagemUrl: arvore, correta: true },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: 'Yes! "It\'s a tree!". Big and green!',
      feedbackErro: 'A "tree" é a árvore grande.',
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: '"Look! It\'s a flower!". Toca na "flower".',
      palavraAlvoEn: "Flower",
      opcoes: [
        { nome: "flor", imagemUrl: flor, correta: true },
        { nome: "árvore", imagemUrl: arvore, correta: false },
      ],
      feedbackAcerto: 'Perfect! "It\'s a flower!". So pretty!',
      feedbackErro: 'A "flower" é a florzinha colorida.',
    },
    {
      tipo: "historiaEn",
      titulo: "Lily in the garden",
      cenas: [
        {
          imagemUrl: arvore,
          narracao: 'Lily entra no jardim. Ela olha pra cima: "Look! It\'s a tree!".',
        },
        {
          imagemUrl: flor,
          narracao: 'Ela abaixa e vê no chão: "Look! It\'s a flower!". Que cheirinho gostoso!',
        },
        {
          imagemUrl: passaro,
          narracao: 'Um "bird" pousa na tree: "Look! Tweet tweet!". Que jardim mágico!',
        },
      ],
    },
    {
      tipo: "fazDeConta",
      imagemUrl: flor,
      convite:
        'Se dá pra ir na janela, olha pra fora e aponta: "Look! It\'s a tree!", "Look! It\'s a flower!". Se não tiver, olha em desenhos.',
      dica: "Vale flor de plástico ou desenho no papel.",
    },
    {
      tipo: "celebracao",
      medalha: "Little Talker — Nature",
      mascoteUrl: brilha,
      falaFinal:
        'Beautiful! Você descreve o jardim em inglês: "It\'s a tree, it\'s a flower!". Wow!',
    },
  ],
};

export const n4Maternal_semana3 = {
  slug: "n4-semana-3",
  numero: 3,
  titulo: "Semana 3 — Look! It's a…",
  subtitulo: "Apontar e descrever animais e natureza",
  aulas: [n4S3A01, n4S3A02],
};
