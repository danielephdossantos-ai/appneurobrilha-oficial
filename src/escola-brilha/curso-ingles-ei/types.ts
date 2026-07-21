/**
 * Inglês EI — Educação Infantil (Maternal · Pré I · Pré II)
 *
 * Regra pedagógica:
 *  - Nunca palavras escritas como conteúdo — só IMAGEM + ÁUDIO + TOQUE.
 *  - Narração em PT com a palavra-alvo em EN entre "aspas" (o player
 *    detecta e usa voz nativa en-US via speakBilingual).
 *  - Cada aula segue o esqueleto fixo de 11 momentos.
 */

export type SerieEI = "maternal" | "pre1" | "pre2";

export type MomentoIng =
  | {
      tipo: "boasVindas";
      mascoteUrl: string;
      falaMascote: string; // PT com EN entre "aspas"
      legenda?: string;
    }
  | {
      tipo: "vocabEn";
      // 3 palavras-alvo. Toca na imagem → fala a palavra em EN.
      instrucaoAudio: string; // PT
      itens: Array<{ en: string; pt: string; imagemUrl: string }>;
    }
  | {
      tipo: "musicaEn";
      // Verso simples cantável em EN. Ex.: "Hello, hello, how are you?"
      imagemUrl: string;
      versos: Array<{ en: string; pt: string; gesto?: string }>;
      legenda?: string;
    }
  | {
      tipo: "escolhaImagem";
      // "Toque no 'dog'." → escolhe entre 3 imagens.
      instrucaoAudio: string; // PT
      palavraAlvoEn: string; // "dog"
      opcoes: Array<{ nome: string; imagemUrl: string; correta: boolean }>;
      feedbackAcerto: string;
      feedbackErro: string;
    }
  | {
      tipo: "historiaEn";
      // Micro-história em 3 cenas. Cada cena tem narração PT com EN entre "aspas".
      titulo: string;
      cenas: Array<{ imagemUrl: string; narracao: string }>;
    }
  | {
      tipo: "fazDeConta";
      // Convite para imitar/dramatizar. Ex.: "Say 'Hello!' waving your hand."
      imagemUrl: string;
      convite: string; // PT com EN em "aspas"
      dica?: string;
    }
  | {
      tipo: "rodaConversa";
      // Pergunta aberta em PT (sem certo/errado).
      imagemUrl: string;
      pergunta: string;
      exemplos?: string[];
    }
  | {
      tipo: "missaoFamilia";
      titulo: string;
      convite: string;
      dicaAdulto: string;
    }
  | {
      tipo: "celebracao";
      medalha: string;
      mascoteUrl: string;
      falaFinal: string; // PT com EN em "aspas"
    };

export interface AulaIng {
  slug: string;
  titulo: string; // "Hello, friend!"
  subtitulo?: string; // "Semana 1 · Dia 1"
  icone: string;
  duracaoMin: number;
  momentos: MomentoIng[];
  baseCientifica?: string;
}

export interface UnidadeIng {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  aulas: AulaIng[];
}

export interface CursoIng {
  slug: string; // "ingles-ei-maternal" etc.
  serie: SerieEI;
  serieLabel: string; // "Maternal (3–4 anos)"
  titulo: string;
  descricao: string;
  corPrimaria: string;
  corSecundaria: string;
  mascoteUrl: string;
  unidades: UnidadeIng[];
}
