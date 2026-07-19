/**
 * Códice de Língua Portuguesa — Educação Infantil (Maternal · Pré I · Pré II)
 *
 * BNCC: Campo de Experiência "Escuta, fala, pensamento e imaginação"
 * (EI02EF01-09 · EI03EF01-09). Aqui NÃO se ensina a ler palavras
 * escritas — trabalha-se ORALIDADE, ESCUTA, RITMO, CONSCIÊNCIA
 * FONOLÓGICA, VOCABULÁRIO e IMAGINAÇÃO.
 *
 * Regra visual (memória travada do projeto):
 *   - Educação Infantil usa IMAGENS + ÁUDIO + TOQUE. Nunca palavras
 *     escritas como conteúdo. Textos existem só como narração/áudio
 *     e legenda breve para o adulto acompanhante.
 *   - Toda atividade é jogo visual interativo.
 */

export type Serie = "maternal" | "pre1" | "pre2";

// Cada momento é uma "tela" do player. Todas usam imagem grande +
// narração TTS obrigatória (audio-first). Interação varia.
export type MomentoEI =
  | {
      tipo: "boasVindas";
      mascoteUrl: string;
      falaMascote: string; // TTS
      legenda?: string; // opcional para o adulto
    }
  | {
      tipo: "escutaRitmada";
      // Parlenda / cantiga curta. TTS lê no ritmo, criança acompanha.
      imagemUrl: string;
      versos: string[]; // cada linha vira uma fala pausada
      legenda?: string;
    }
  | {
      tipo: "vocabularioVisual";
      // 3 palavras-imagem. Toca na imagem → TTS fala o nome.
      instrucaoAudio: string;
      itens: Array<{ nome: string; imagemUrl: string }>;
    }
  | {
      tipo: "somInicial";
      // Consciência fonológica: qual começa com o mesmo som?
      instrucaoAudio: string;
      referencia: { nome: string; imagemUrl: string };
      opcoes: Array<{ nome: string; imagemUrl: string; correta: boolean }>;
      feedbackAcerto: string;
      feedbackErro: string;
    }
  | {
      tipo: "ritmoCorpo";
      // Bater palma nas sílabas. Criança toca N vezes.
      instrucaoAudio: string;
      palavra: string; // "bo-la"
      silabas: number; // 2
      imagemUrl: string;
      elogio: string;
    }
  | {
      tipo: "historiaIlustrada";
      // Micro-história em 3 cenas narradas.
      titulo: string;
      cenas: Array<{ imagemUrl: string; narracao: string }>;
    }
  | {
      tipo: "compreensaoImagem";
      // Quem/onde/o quê. Escolha entre imagens.
      perguntaAudio: string;
      opcoes: Array<{ nome: string; imagemUrl: string; correta: boolean }>;
      feedbackAcerto: string;
      feedbackErro: string;
    }
  | {
      tipo: "fazDeConta";
      // Convite para imitar / dramatizar.
      imagemUrl: string;
      convite: string; // TTS
      dica?: string;
    }
  | {
      tipo: "rodaConversa";
      // Pergunta aberta, sem resposta certa. Adulto/criança conversa.
      imagemUrl: string;
      pergunta: string; // TTS
      exemplos?: Array<string | { nome: string; imagemUrl?: string }>;
    }
  | {
      tipo: "missaoFamilia";
      // Registro offline (foto/áudio/desenho).
      titulo: string;
      convite: string;
      dicaAdulto: string;
    }
  | {
      tipo: "celebracao";
      medalha: string; // nome da conquista
      mascoteUrl: string;
      falaFinal: string;
    };

export interface AulaEI {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string[]; // ex ["EI03EF01","EI03EF06"]
  duracaoMin: number;
  momentos: MomentoEI[]; // 11
}

export interface UnidadeEI {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  aulas: AulaEI[];
}

export interface CursoEI {
  slug: string; // "portugues-ei-maternal" etc.
  serie: Serie;
  serieLabel: string; // "Maternal (3–4 anos)"
  titulo: string;
  descricao: string;
  corPrimaria: string;
  corSecundaria: string;
  mascoteUrl: string;
  unidades: UnidadeEI[];
}
