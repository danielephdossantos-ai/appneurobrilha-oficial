/**
 * Escola Brilha — modelo único de aula.
 * Toda habilidade BNCC segue exatamente esta estrutura (12 blocos).
 * Uma aula = um arquivo em src/escola-brilha/data/<CODIGO>.ts.
 */

export type QuizItem = {
  pergunta: string;
  opcoes: string[];
  correta: number; // índice em opcoes
  explicacao: string;
};

export type Exercicio = {
  enunciado: string;
  resposta: string;
  dica?: string;
};

/** Modelo único — 12 blocos fixos. Nenhuma aula pode fugir desse padrão. */
export type Aula = {
  codigo: string;              // ex: "EF01MA01"
  ano: string;                 // ex: "1º Ano"
  disciplina: string;          // ex: "Matemática"
  titulo: string;              // título curto, amigável à criança

  /**
   * Narrativa de abertura (OBRIGATÓRIA em toda missão nova).
   * História curta que prepara a explicação pedagógica.
   *
   * Regras:
   *  - Duração alvo: ATÉ 2 MINUTOS de leitura (~1500 caracteres somando os três campos).
   *  - Deve despertar CURIOSIDADE, criar CONTEXTO, apresentar um PROBLEMA
   *    e CONVIDAR a criança a participar.
   *  - Deve estar diretamente relacionada ao conteúdo BNCC da missão.
   *  - Evitar histórias longas — priorizar frases curtas e concretas.
   *
   * Estrutura:
   *  contexto → onde/quando a história acontece (cenário e personagens).
   *  problema → o desafio que surge e precisa ser resolvido.
   *  convite  → chamada direta à criança ("Vamos ajudar?", "Bora descobrir?").
   *
   * Se ausente, o player usa `missao` como abertura simples (compatibilidade).
   */
  narrativa?: {
    titulo: string;
    contexto: string;
    problema: string;
    convite: string;
  };

  // 1. Missão
  missao: string;

  // 2. Objetivos
  objetivos: string[];
  // 3. Explicação
  explicacao: string;
  /**
   * Aprendizagem Ativa (opcional): fatia a explicação em pequenos pedaços,
   * cada um seguido de uma micro-interação (toque, checagem rápida ou
   * observação). Se ausente, o bloco Explicação fatia automaticamente o
   * texto de `explicacao` em parágrafos e insere um "toque para continuar"
   * entre eles — nunca mais um paredão de texto.
   */
  explicacaoAtiva?: Array<{
    texto: string;
    checagem?: {
      pergunta: string;
      opcoes: string[];
      correta: number;
      explicacao?: string;
    };
  }>;
  /**
   * Níveis de aprofundamento da explicação (opcional).
   * Todo nível deve ter um texto DIFERENTE — o player nunca repete a mesma
   * frase quando a criança pede "explicar de outro jeito".
   *
   *   nivel1 → explicação extremamente simples (frase-mãe, curtíssima)
   *   nivel2 → novo exemplo concreto do cotidiano
   *   nivel3 → outra forma de explicar (analogia, desenho falado, história)
   *   nivel4 → aplicação prática (onde isso aparece na vida real)
   *
   * Se ausente, o player usa o próprio `explicacao` como nível 1 e libera
   * apenas os níveis que tiverem texto distinto.
   */
  explicacoesNiveis?: {
    nivel1?: string;
    nivel2?: string;
    nivel3?: string;
    nivel4?: string;
  };
  // 4. Exemplo
  exemploResolvido: { enunciado: string; passos: string[]; resposta: string };
  // 5. Prática Guiada
  atividadeGuiada: { enunciado: string; resposta: string; explicacao: string };
  // 6. Exercícios
  exercicios: Exercicio[];
  // 7. Desafio
  desafio: { enunciado: string; resposta: string };
  // 8. Quiz
  quiz: QuizItem[];
  // 9. Resumo (pontos-chave + dica)
  revisao: { pontos: string[]; dica: string };
  // 10. Conclusão
  conclusao: string;

  // Opcional — diagnóstico rápido dos conhecimentos prévios (antes da aula).
  // Se ausente, o player pula direto pra Missão.
  conhecimentosPrevios?: string[];
  diagnostico?: QuizItem[];

  /**
   * Multi-modalidade (opcional). Atende diferentes estilos de aprendizagem
   * combinando texto, imagem, áudio, animação, objetos manipuláveis e jogos
   * educativos (arrastar, ordenar, ligar, colorir, montar).
   *
   *   midias         → imagens ilustrativas / áudios (URL) exibidos junto
   *                    da explicação ou dos exemplos.
   *   interativas    → mini-jogos manipuláveis intercalados na aula.
   *
   * O player renderiza esses recursos após o bloco Explicação. Se ausente,
   * a aula continua funcionando só com texto/voz (não há regressão).
   */
  midias?: Array<
    | { tipo: "imagem"; url: string; alt: string; legenda?: string }
    | { tipo: "audio"; url: string; titulo: string }
    | { tipo: "animacao"; emojis: string[]; legenda?: string } // animação simples inline
  >;
  interativas?: Array<
    | {
        tipo: "arrastar";
        titulo: string;
        instrucao: string;
        // pares (item → alvo). O jogador arrasta o item pro alvo certo.
        pares: Array<{ item: string; alvo: string }>;
      }
    | {
        tipo: "ordenar";
        titulo: string;
        instrucao: string;
        // sequência correta; embaralhada na tela.
        itens: string[];
      }
    | {
        tipo: "ligar";
        titulo: string;
        instrucao: string;
        // colunas A ↔ B; a criança liga cada A ao B correspondente.
        pares: Array<{ a: string; b: string }>;
      }
    | {
        tipo: "colorir";
        titulo: string;
        instrucao: string;
        // regiões nomeadas + cor esperada (feedback quando acerta).
        regioes: Array<{ nome: string; corCorreta: string }>;
        paleta: string[]; // cores disponíveis
      }
    | {
        tipo: "montar";
        titulo: string;
        instrucao: string;
        // peças que devem ser selecionadas na ordem certa pra montar algo.
        pecas: string[]; // ordem correta
      }
  >;

  /**
   * Progressão automática por níveis (opcional).
   *
   *   fácil  → aprendizagem inicial (reconhecer / identificar).
   *   médio  → aplicação do conceito (usar em situação nova).
   *   difícil → problemas mais elaborados (analisar / combinar).
   *
   * A criança só avança pro próximo nível após demonstrar DOMÍNIO
   * (padrão ≥70% de acertos) do nível anterior. O desempenho de cada
   * etapa fica registrado (localStorage por criança+aula) e é agregado
   * ao contador global de acertos/erros da aula em `escola_progresso`.
   *
   * Se ausente, o bloco Exercícios cai no fallback simples de `exercicios[]`.
   */
  niveis?: {
    facil?: QuizItem[];
    medio?: QuizItem[];
    dificil?: QuizItem[];
    /** Percentual mínimo pra desbloquear o próximo nível. Padrão: 70. */
    dominioMinimo?: number;
  };


  // Opcional — mantido pra compatibilidade, não é mais renderizado como bloco
  motivacao?: string;
  proximaHabilidade?: { codigo: string; titulo?: string };
};
