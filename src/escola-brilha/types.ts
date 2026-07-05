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
  /**
   * Visual OBRIGATÓRIO para crianças não-alfabetizadas (Ed. Infantil / 1º Ano):
   * mostra a cena da pergunta com imagens de contagem. Uma imagem repetida N vezes
   * (ex.: 5 cenouras) ou vários grupos coloridos (ex.: 3 grupos de 3 maçãs).
   */
  visual?:
    | {
        tipo: "itens";
        imagemUrl: string;
        quantidade: number;
        rotulo?: string;
      }
    | {
        tipo: "grupos";
        grupos: Array<{ imagemUrl: string; quantidade: number; rotulo?: string; cor?: string }>;
      }
    | {
        tipo: "comparar";
        lados: Array<{ imagemUrl: string; quantidade: number; rotulo: string; cor?: string }>;
      }
    | {
        /**
         * Cena de POSIÇÃO ESPACIAL — mostra o sujeito na posição real
         * (em cima, embaixo, dentro, fora, direita, esquerda, atrás,
         * frente, ao lado) em relação à referência. Sem contagem.
         */
        tipo: "cena";
        posicao:
          | "cima"
          | "baixo"
          | "dentro"
          | "fora"
          | "direita"
          | "esquerda"
          | "atras"
          | "frente"
          | "aoLado";
        referenciaImg: string;
        referenciaLabel?: string;
        sujeitoImg: string;
        sujeitoLabel?: string;
      }
    | {
        /** Fila de 3 itens para ilustrar "entre" (o do meio é destacado). */
        tipo: "cenaEntre";
        fila: Array<{ img: string; label: string }>;
      };
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
    /** Exemplo curtíssimo do cotidiano ligado ao bloco. */
    exemplo?: string;
    /** URL de ilustração OU um emoji/símbolo grande. */
    imagem?: string;
    /** Legenda opcional da imagem. */
    imagemAlt?: string;
    /** Micro-interação (quiz de 1 pergunta). Se ausente, o bloco exige o botão "Entendi ✓". */
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
  exemploResolvido: {
    enunciado: string;
    passos: string[];
    resposta: string;
    /**
     * Exemplo INTERATIVO (opcional). Quando presente, o bloco renderiza
     * a atividade real — a criança toca em cada item, o professor conta
     * em voz alta e mostra a resposta. Ideal para Ed. Infantil e 1º Ano.
     */
    interativo?: {
      tipo: "contagem";
      /** URL da imagem do item a contar (ex.: maçã). Vem do Banco de Mídias. */
      imagemUrl: string;
      /** Quantidade de itens exibidos. */
      quantidade: number;
      /** Nome singular do item (ex.: "maçã"). */
      nomeItem: string;
      /** Plural do item (ex.: "maçãs"). Se ausente, adiciona "s". */
      nomeItemPlural?: string;
      /** Pergunta lida em voz alta. Padrão: "Quantas <plural> existem?". */
      pergunta?: string;
    };
  };
  // 5. Prática Guiada
  atividadeGuiada: {
    enunciado: string;
    resposta: string;
    explicacao: string;
    /**
     * Prática VISUAL (opcional). Renderiza a cena real com imagens grandes
     * do Banco de Mídias — não emojis. Ex.: pódio 1º/2º/3º com fotos das
     * crianças. A criança toca no participante para responder.
     */
    visual?:
      | {
          tipo: "podio";
          pergunta: string;
          participantes: Array<{
            nome: string;
            imagemUrl: string;
            posicao: 1 | 2 | 3;
          }>;
          /** Nome correto — o toque nesse participante confirma acerto. */
          respostaCerta: string;
        }
      | {
          /** Renderiza N grupos iguais de imagens para ensinar contagem em grupos. */
          tipo: "grupos";
          pergunta: string;
          imagemUrl: string;
          itemSingular: string;
          itemPlural: string;
          /** Quantidade de grupos. */
          quantidadeGrupos: number;
          /** Itens em cada grupo (todos iguais). */
          itensPorGrupo: number;
          /** Alternativas para a criança tocar. */
          opcoes: number[];
          /** Índice da alternativa correta (deve bater com grupos × itens). */
          correta: number;
        }
      | {
          /**
           * Cena de POSIÇÃO ESPACIAL — sujeito posicionado de verdade
           * (em cima, embaixo, dentro, fora, direita, esquerda, atrás,
           * frente, ao lado) sobre a referência. A criança escolhe entre
           * alternativas descritivas.
           */
          tipo: "cena";
          pergunta: string;
          posicao:
            | "cima"
            | "baixo"
            | "dentro"
            | "fora"
            | "direita"
            | "esquerda"
            | "atras"
            | "frente"
            | "aoLado";
          referenciaImg: string;
          referenciaLabel?: string;
          sujeitoImg: string;
          sujeitoLabel?: string;
          opcoes: string[];
          correta: number;
        };
  };

  // 6. Exercícios
  exercicios: Exercicio[];
  // 7. Desafio
  desafio: {
    enunciado: string;
    resposta: string;
    /**
     * Desafio VISUAL interativo (opcional). Renderiza a cena com imagens
     * (ex.: Papagaio com 8 sementes, Esquilo com 5 castanhas, Coelho com 10 cenouras)
     * e várias perguntas de múltipla escolha em sequência. A criança clica
     * na resposta certa em cada pergunta.
     */
    visual?: {
      cena: Array<{
        personagem: string;
        personagemImagemUrl?: string;
        itemImagemUrl: string;
        quantidade: number;
        cor?: string;
      }>;
      perguntas: QuizItem[];
    };
  };

  // 8. Quiz
  quiz: QuizItem[];
  // 9. Resumo (pontos-chave + dica)
  revisao: { pontos: string[]; dica: string };
  // 10. Conclusão
  conclusao: string;
  /**
   * Curiosidade (opcional mas RECOMENDADA em toda aula). Um "você sabia?"
   * curto ligado ao tema, para despertar interesse antes da conclusão.
   */
  curiosidade?: {
    titulo?: string;
    texto: string;
    imagemUrl?: string;
  };


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
        pares: Array<{ item: string; alvo: string; itemImagem?: string }>;
        /**
         * Suporte visual (opcional). Quando presente, cada item é
         * renderizado como uma cópia da imagem (em vez de só texto).
         */
        itemImagem?: string;
        /**
         * Alvos visuais (opcional). Renderiza cada alvo com uma cor de
         * fundo, número de capacidade e (opcional) imagem central. O
         * `nome` deve casar com `alvo` dos pares.
         */
        alvosVisuais?: Array<{
          nome: string;
          cor: string;
          capacidade?: number;
          imagemUrl?: string;
        }>;
      }
    | {
        tipo: "ordenar";
        titulo: string;
        instrucao: string;
        // sequência correta; embaralhada na tela.
        itens: string[];
        /**
         * Suporte visual (opcional). Cada entrada é um grupo de imagens.
         * A ordem correta é a ordem do array. Usado para Ed. Infantil e
         * 1º Ano, onde a criança ordena por quantidade visual.
         */
        imagens?: Array<{
          imagemUrl: string;
          quantidade: number;
          rotulo?: string;
          // Segundo grupo opcional (para ordenar somas/pares, ex.: 1+7).
          imagemUrl2?: string;
          quantidade2?: number;
          cor?: string;
          cor2?: string;
        }>;
      }
    | {
        tipo: "ligar";
        titulo: string;
        instrucao: string;
        /**
         * colunas A ↔ B; a criança liga cada A ao B correspondente.
         *
         * Suporte visual (opcional, ideal Ed. Infantil / 1º ano):
         *  - `aImagem` + `aQuantidade` renderizam N cópias da imagem na
         *    coluna A (ex.: 8 cenouras). O rótulo de texto vira legenda.
         *  - `bImagem` + `bQuantidade` fazem o mesmo na coluna B (raro).
         */
        pares: Array<{
          a: string;
          b: string;
          aImagem?: string;
          aQuantidade?: number;
          bImagem?: string;
          bQuantidade?: number;
        }>;
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
    | {
        /**
         * Mini-jogo de contagem visual com alternativas.
         * Ideal para Ed. Infantil / 1º Ano: mostra 1+ grupos de itens
         * (imagens do banco de mídias) e uma pergunta de múltipla escolha.
         *
         * Casos de uso:
         *  - Contar um a um (1 grupo).
         *  - Contar em grupos (N grupos iguais).
         *  - Comparar coleções (2 grupos rotulados, ex.: "Esquerda" x "Direita").
         *  - Completar coleção (2 grupos rotulados "Antes" x "Depois").
         */
        tipo: "contarQuiz";
        titulo: string;
        instrucao?: string;
        grupos: Array<{
          imagemUrl: string;
          quantidade: number;
          rotulo?: string;
        }>;
        pergunta: string;
        opcoes: string[];
        correta: number;
        acerto?: string;
        erro?: string;
      }
    | {
        /**
         * Conta visual de + ou − com imagens aparecendo (soma) ou
         * sumindo (subtração). OBRIGATÓRIO para Ed. Infantil, 1º e 2º Ano
         * — nunca mostrar contas só em texto.
         */
        tipo: "operacao";
        titulo: string;
        instrucao?: string;
        operacao: "soma" | "subtracao";
        imagemUrl: string;
        itemPlural: string;
        a: number;
        b: number;
        cor?: string;
        legenda?: string;
      }
    | {
        /**
         * Cena visual de POSIÇÃO ESPACIAL — mostra de verdade em cima,
         * embaixo, dentro, fora, direita, esquerda, atrás, frente, ao lado
         * ou "entre" (fila de 3). Ideal para EF01MA11.
         */
        tipo: "posicaoEspacial";
        titulo: string;
        instrucao?: string;
        cenas: Array<
          | {
              modo: "dupla";
              referenciaImg: string;
              referenciaLabel?: string;
              sujeitoImg: string;
              sujeitoLabel?: string;
              posicao:
                | "cima"
                | "baixo"
                | "dentro"
                | "fora"
                | "direita"
                | "esquerda"
                | "atras"
                | "frente"
                | "aoLado";
              pergunta: string;
              opcoes: string[];
              correta: number;
              acerto?: string;
              erro?: string;
            }
          | {
              modo: "entre";
              fila: Array<{ img: string; label: string }>;
              pergunta: string;
              opcoes: string[];
              correta: number;
              acerto?: string;
              erro?: string;
            }
        >;
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
