/**
 * Sistema de Conquistas Educacionais
 * -----------------------------------
 * Reconhece o progresso PESSOAL da criança:
 *   • primeira missão concluída
 *   • sequência de estudos (dias consecutivos)
 *   • domínio de habilidades BNCC
 *   • melhora de desempenho
 *   • persistência (tentar de novo após erro)
 *   • revisões concluídas
 *   • evolução contínua
 *
 * REGRA DE OURO:
 *   As conquistas NÃO comparam crianças entre si.
 *   Não há ranking, pontuação relativa, medalhas por posição,
 *   nem qualquer sinal competitivo. Cada criança é reconhecida
 *   pelo próprio caminho.
 *
 * Armazenamento local por criança em `localStorage`
 *   chave: `eb_conquistas_v1:<childId>`
 *
 * A fachada em `motor/index.ts` expõe apenas esta API.
 */

export type CategoriaConquista =
  | "primeira_missao"
  | "sequencia_estudos"
  | "dominio_habilidade"
  | "melhora_desempenho"
  | "persistencia"
  | "revisoes"
  | "evolucao_continua";

export type Conquista = {
  id: string;
  categoria: CategoriaConquista;
  titulo: string;
  descricao: string;
  emoji: string;
  conquistadaEm: string; // ISO
  contexto?: {
    codigoBncc?: string;
    valor?: number;
    unidade?: string;
  };
};

export type CatalogoConquista = {
  id: string;
  categoria: CategoriaConquista;
  titulo: string;
  descricao: string;
  emoji: string;
  mensagemCelebracao: string;
};

/** Catálogo mestre. Todas as conquistas são de progresso PESSOAL. */
export const CATALOGO_CONQUISTAS: CatalogoConquista[] = [
  // Primeira missão
  {
    id: "primeira_missao",
    categoria: "primeira_missao",
    titulo: "Primeiro passo",
    descricao: "Você concluiu sua primeira missão!",
    emoji: "🌱",
    mensagemCelebracao: "Que começo lindo! Todo grande caminho começa com o primeiro passo.",
  },
  // Sequência de estudos (dias consecutivos)
  {
    id: "sequencia_2_dias",
    categoria: "sequencia_estudos",
    titulo: "Continuando o ritmo",
    descricao: "Você estudou 2 dias seguidos.",
    emoji: "🔥",
    mensagemCelebracao: "Continuar é o segredo. Muito bem por voltar!",
  },
  {
    id: "sequencia_5_dias",
    categoria: "sequencia_estudos",
    titulo: "Semana de estudos",
    descricao: "Você estudou 5 dias.",
    emoji: "📅",
    mensagemCelebracao: "Uma semana inteira de esforço. Sua dedicação é linda!",
  },
  {
    id: "sequencia_10_dias",
    categoria: "sequencia_estudos",
    titulo: "Constância brilhante",
    descricao: "Você estudou 10 dias.",
    emoji: "✨",
    mensagemCelebracao: "Sua constância mostra o quanto você acredita em si!",
  },
  // Domínio de habilidades
  {
    id: "primeira_habilidade_dominada",
    categoria: "dominio_habilidade",
    titulo: "Habilidade dominada",
    descricao: "Você dominou uma habilidade da BNCC.",
    emoji: "🏅",
    mensagemCelebracao: "Você aprendeu de verdade — isso fica com você para sempre!",
  },
  {
    id: "cinco_habilidades_dominadas",
    categoria: "dominio_habilidade",
    titulo: "Cinco habilidades no coração",
    descricao: "Você já dominou 5 habilidades da BNCC.",
    emoji: "🎓",
    mensagemCelebracao: "Cada habilidade dominada é uma janela nova para o mundo.",
  },
  // Melhora de desempenho
  {
    id: "melhorou_desempenho",
    categoria: "melhora_desempenho",
    titulo: "Melhor que ontem",
    descricao: "Você melhorou seu próprio desempenho.",
    emoji: "📈",
    mensagemCelebracao: "Você superou você mesmo. É disso que se trata!",
  },
  // Persistência
  {
    id: "tentou_de_novo",
    categoria: "persistencia",
    titulo: "Não desistir",
    descricao: "Você errou e tentou de novo.",
    emoji: "💪",
    mensagemCelebracao: "Errar faz parte de aprender. Você foi corajoso ao continuar!",
  },
  {
    id: "persistencia_forte",
    categoria: "persistencia",
    titulo: "Persistência forte",
    descricao: "Você persistiu em 5 momentos difíceis.",
    emoji: "🛡️",
    mensagemCelebracao: "Persistência é uma das habilidades mais preciosas da vida.",
  },
  // Revisões
  {
    id: "primeira_revisao",
    categoria: "revisoes",
    titulo: "Revisão feita",
    descricao: "Você concluiu sua primeira revisão.",
    emoji: "🔁",
    mensagemCelebracao: "Revisar fortalece a memória. Você está cuidando do que aprende!",
  },
  {
    id: "dez_revisoes",
    categoria: "revisoes",
    titulo: "Memória forte",
    descricao: "Você concluiu 10 revisões.",
    emoji: "🧠",
    mensagemCelebracao: "Seu cérebro está mais forte a cada revisão!",
  },
  // Evolução contínua
  {
    id: "evolucao_continua",
    categoria: "evolucao_continua",
    titulo: "Sempre evoluindo",
    descricao: "Você mostra evolução constante nos estudos.",
    emoji: "🌟",
    mensagemCelebracao: "Você cresce um pouquinho todo dia — e isso é enorme!",
  },
];

// =====================================================================
// Estado por criança
// =====================================================================

type EstadoConquistas = {
  conquistadas: Conquista[];
  contadores: {
    missoesConcluidas: number;
    habilidadesDominadas: string[];
    revisoesConcluidas: number;
    persistencias: number;
    diasEstudo: string[]; // YYYY-MM-DD
    ultimoDesempenhoPorHabilidade: Record<string, number>;
  };
};

const KEY = (childId: string) => `eb_conquistas_v1:${childId}`;

function estadoVazio(): EstadoConquistas {
  return {
    conquistadas: [],
    contadores: {
      missoesConcluidas: 0,
      habilidadesDominadas: [],
      revisoesConcluidas: 0,
      persistencias: 0,
      diasEstudo: [],
      ultimoDesempenhoPorHabilidade: {},
    },
  };
}

function carregar(childId: string): EstadoConquistas {
  if (typeof window === "undefined") return estadoVazio();
  try {
    const raw = window.localStorage.getItem(KEY(childId));
    if (!raw) return estadoVazio();
    const parsed = JSON.parse(raw) as EstadoConquistas;
    return { ...estadoVazio(), ...parsed };
  } catch {
    return estadoVazio();
  }
}

function salvar(childId: string, estado: EstadoConquistas) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY(childId), JSON.stringify(estado));
  } catch {
    /* storage cheio — ignora silenciosamente */
  }
}

function jaTem(estado: EstadoConquistas, id: string): boolean {
  return estado.conquistadas.some((c) => c.id === id);
}

function catalogo(id: string): CatalogoConquista | undefined {
  return CATALOGO_CONQUISTAS.find((c) => c.id === id);
}

function conceder(
  estado: EstadoConquistas,
  id: string,
  contexto?: Conquista["contexto"],
): Conquista | null {
  if (jaTem(estado, id)) return null;
  const cat = catalogo(id);
  if (!cat) return null;
  const nova: Conquista = {
    id: cat.id,
    categoria: cat.categoria,
    titulo: cat.titulo,
    descricao: cat.descricao,
    emoji: cat.emoji,
    conquistadaEm: new Date().toISOString(),
    contexto,
  };
  estado.conquistadas.push(nova);
  return nova;
}

function hoje(): string {
  return new Date().toISOString().slice(0, 10);
}

function diasConsecutivos(dias: string[]): number {
  if (dias.length === 0) return 0;
  const set = new Set(dias);
  let cur = new Date();
  let count = 0;
  // se hoje não estudou, começa de ontem
  if (!set.has(cur.toISOString().slice(0, 10))) {
    cur.setDate(cur.getDate() - 1);
  }
  while (set.has(cur.toISOString().slice(0, 10))) {
    count++;
    cur.setDate(cur.getDate() - 1);
  }
  return count;
}

// =====================================================================
// API pública
// =====================================================================

export type EventoConquista =
  | { tipo: "missao_concluida"; codigoBncc: string; desempenho: number }
  | { tipo: "revisao_concluida"; codigoBncc: string }
  | { tipo: "habilidade_dominada"; codigoBncc: string }
  | { tipo: "persistiu_apos_erro"; codigoBncc?: string }
  | { tipo: "evolucao_registrada"; codigoBncc: string; delta: number };

export const ConquistasEducacionais = {
  catalogo: CATALOGO_CONQUISTAS,

  /** Todas as conquistas já obtidas por esta criança. */
  listar(childId: string): Conquista[] {
    return carregar(childId).conquistadas.slice().sort(
      (a, b) => a.conquistadaEm.localeCompare(b.conquistadaEm),
    );
  },

  /** Progresso pessoal (sem comparar com outras crianças). */
  resumo(childId: string) {
    const e = carregar(childId);
    return {
      totalConquistadas: e.conquistadas.length,
      totalPossiveis: CATALOGO_CONQUISTAS.length,
      missoesConcluidas: e.contadores.missoesConcluidas,
      habilidadesDominadas: e.contadores.habilidadesDominadas.length,
      revisoesConcluidas: e.contadores.revisoesConcluidas,
      diasSeguidos: diasConsecutivos(e.contadores.diasEstudo),
      persistencias: e.contadores.persistencias,
    };
  },

  /**
   * Registra um evento pedagógico e retorna as conquistas RECÉM
   * desbloqueadas (para o componente celebrar).
   * Nunca retorna conquistas já existentes.
   */
  registrar(childId: string, evento: EventoConquista): Conquista[] {
    const estado = carregar(childId);
    const novas: Conquista[] = [];

    // sempre marca dia de estudo
    const dia = hoje();
    if (!estado.contadores.diasEstudo.includes(dia)) {
      estado.contadores.diasEstudo.push(dia);
      // limita histórico a ~1 ano
      if (estado.contadores.diasEstudo.length > 400) {
        estado.contadores.diasEstudo = estado.contadores.diasEstudo.slice(-400);
      }
    }

    switch (evento.tipo) {
      case "missao_concluida": {
        estado.contadores.missoesConcluidas += 1;
        if (estado.contadores.missoesConcluidas === 1) {
          const c = conceder(estado, "primeira_missao", { codigoBncc: evento.codigoBncc });
          if (c) novas.push(c);
        }
        // melhora de desempenho
        const anterior = estado.contadores.ultimoDesempenhoPorHabilidade[evento.codigoBncc];
        if (typeof anterior === "number" && evento.desempenho > anterior + 5) {
          const c = conceder(estado, "melhorou_desempenho", {
            codigoBncc: evento.codigoBncc,
            valor: Math.round(evento.desempenho - anterior),
            unidade: "pontos",
          });
          if (c) novas.push(c);
        }
        estado.contadores.ultimoDesempenhoPorHabilidade[evento.codigoBncc] = evento.desempenho;
        break;
      }
      case "revisao_concluida": {
        estado.contadores.revisoesConcluidas += 1;
        if (estado.contadores.revisoesConcluidas === 1) {
          const c = conceder(estado, "primeira_revisao", { codigoBncc: evento.codigoBncc });
          if (c) novas.push(c);
        }
        if (estado.contadores.revisoesConcluidas === 10) {
          const c = conceder(estado, "dez_revisoes");
          if (c) novas.push(c);
        }
        break;
      }
      case "habilidade_dominada": {
        if (!estado.contadores.habilidadesDominadas.includes(evento.codigoBncc)) {
          estado.contadores.habilidadesDominadas.push(evento.codigoBncc);
        }
        const n = estado.contadores.habilidadesDominadas.length;
        if (n === 1) {
          const c = conceder(estado, "primeira_habilidade_dominada", { codigoBncc: evento.codigoBncc });
          if (c) novas.push(c);
        }
        if (n === 5) {
          const c = conceder(estado, "cinco_habilidades_dominadas");
          if (c) novas.push(c);
        }
        break;
      }
      case "persistiu_apos_erro": {
        estado.contadores.persistencias += 1;
        if (estado.contadores.persistencias === 1) {
          const c = conceder(estado, "tentou_de_novo", { codigoBncc: evento.codigoBncc });
          if (c) novas.push(c);
        }
        if (estado.contadores.persistencias === 5) {
          const c = conceder(estado, "persistencia_forte");
          if (c) novas.push(c);
        }
        break;
      }
      case "evolucao_registrada": {
        if (evento.delta > 0) {
          const c = conceder(estado, "evolucao_continua", {
            codigoBncc: evento.codigoBncc,
            valor: evento.delta,
          });
          if (c) novas.push(c);
        }
        break;
      }
    }

    // sequência de dias (avaliada em qualquer evento)
    const seq = diasConsecutivos(estado.contadores.diasEstudo);
    if (seq >= 2) {
      const c = conceder(estado, "sequencia_2_dias", { valor: seq, unidade: "dias" });
      if (c) novas.push(c);
    }
    if (seq >= 5) {
      const c = conceder(estado, "sequencia_5_dias", { valor: seq, unidade: "dias" });
      if (c) novas.push(c);
    }
    if (seq >= 10) {
      const c = conceder(estado, "sequencia_10_dias", { valor: seq, unidade: "dias" });
      if (c) novas.push(c);
    }

    salvar(childId, estado);
    return novas;
  },

  /** Mensagem POSITIVA e PESSOAL para celebrar (sem comparações). */
  mensagemCelebracao(conquista: Conquista): string {
    const cat = catalogo(conquista.id);
    return cat?.mensagemCelebracao ?? "Muito bem! Você conquistou algo importante.";
  },

  /** Reinicia todas as conquistas desta criança (uso administrativo). */
  reiniciar(childId: string): void {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(KEY(childId));
  },
};

export default ConquistasEducacionais;
