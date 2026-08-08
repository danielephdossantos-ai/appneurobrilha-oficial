// Gerador do Plano Anual (3–7 anos).
// Rotina única · 20 min/dia · 5 dias/semana · 40 semanas.
// Prioridade automática pelo risco da anamnese.

import type { RiskMap, AnamneseV2Responses } from "@/modules/anamnese/v2/types";

export type FonteBloco = "escola_brilha" | "neuro_treino" | "brilha_vida";

export interface BlocoPlano {
  semana: number;        // 1..40
  dia_semana: number;    // 1=seg .. 5=sex
  ordem: number;         // 0..3 (4 blocos de 5 min = 20 min)
  fonte: FonteBloco;
  categoria: string;     // ex: 'aurora','biblioteca-encantada','sos-calma'
  titulo: string;
  descricao: string;
  rota: string;
  minutos: number;       // sempre 5
  prioridade: 1 | 2 | 3; // 1 = mais urgente
}

export interface PlanoAnualGerado {
  idade: number;
  serie: string;
  minutos_por_dia: number;
  dias_por_semana: number;
  semanas_totais: number;
  blocos: BlocoPlano[];
  base_anamnese: {
    tem_anamnese: boolean;
    risk?: RiskMap;
    prioridades: FonteBloco[]; // ordem de foco
  };
}

/** 3→Maternal · 4→Pré I · 5→Pré II · 6→1º Ano · 7→2º Ano */
export function idadeParaSerie(idade: number): string {
  if (idade <= 3) return "Maternal";
  if (idade === 4) return "Pré I";
  if (idade === 5) return "Pré II";
  if (idade === 6) return "1º Ano";
  return "2º Ano";
}

interface Candidato {
  fonte: FonteBloco;
  categoria: string;
  titulo: string;
  descricao: string;
  rota: string;
  prioridade: 1 | 2 | 3;
}

/** Escola Brilha por série (idade). Sempre presente — é a espinha do plano. */
function candidatosEscola(idade: number): Candidato[] {
  const serie = idadeParaSerie(idade);
  if (serie === "Maternal" || serie === "Pré I" || serie === "Pré II") {
    return [
      {
        fonte: "escola_brilha",
        categoria: "portugues-ei",
        titulo: "Códice de Português",
        descricao: "Rimas, sons e primeiras letras.",
        rota: "/escola-brilha/portugues-ei",
        prioridade: 2,
      },
      {
        fonte: "escola_brilha",
        categoria: "matematica-ei",
        titulo: "Códice de Matemática",
        descricao: "Contar, comparar, formas e cores.",
        rota: "/escola-brilha/matematica-ei",
        prioridade: 2,
      },
      {
        fonte: "escola_brilha",
        categoria: "biblioteca-encantada",
        titulo: "Biblioteca Encantada",
        descricao: "Comunicação com ABA, PECS e TEACCH.",
        rota: "/escola-brilha/biblioteca-encantada",
        prioridade: 2,
      },
      {
        fonte: "escola_brilha",
        categoria: "ingles-ei",
        titulo: "English Kids",
        descricao: "Inglês lúdico para os pequenos.",
        rota: "/escola-brilha/ingles-ei",
        prioridade: 3,
      },
    ];
  }
  // 1º e 2º ano
  const serieSlug = serie === "1º Ano" ? "1ano" : "2ano";
  return [
    {
      fonte: "escola_brilha",
      categoria: "portugues",
      titulo: "Português",
      descricao: `Trilha de Português — ${serie}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/portugues`,
      prioridade: 2,
    },
    {
      fonte: "escola_brilha",
      categoria: "matematica",
      titulo: "Matemática",
      descricao: `Trilha de Matemática — ${serie}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/matematica`,
      prioridade: 2,
    },
    {
      fonte: "escola_brilha",
      categoria: "geografia",
      titulo: "Geografia",
      descricao: `Trilha de Geografia — ${serie}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/geografia`,
      prioridade: 3,
    },
    {
      fonte: "escola_brilha",
      categoria: "historia",
      titulo: "História",
      descricao: `Trilha de História — ${serie}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/historia`,
      prioridade: 3,
    },
    {
      fonte: "escola_brilha",
      categoria: "ingles",
      titulo: "Inglês",
      descricao: `Trilha de Inglês — ${serie}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/ingles`,
      prioridade: 3,
    },
  ];
}

/** Neuro Treino filtrado pelas áreas de risco da anamnese. */
function candidatosNeuroTreino(risk?: RiskMap): Candidato[] {
  const base: Candidato[] = [
    {
      fonte: "neuro_treino",
      categoria: "aurora",
      titulo: "Ler com Aurora",
      descricao: "Leitura passo a passo com apoio fonológico.",
      rota: "/neuro-treino/ler-com-aurora/painel",
      prioridade: 2,
    },
  ];
  if (!risk) return base;

  const alto = (n?: string) => n === "laranja" || n === "vermelho";
  const medio = (n?: string) => n === "amarelo";

  if (alto(risk.escolar)) {
    base.push({
      fonte: "neuro_treino",
      categoria: "alfabetizacao-brilha",
      titulo: "Alfabetização Brilha",
      descricao: "Consciência fonológica intensiva.",
      rota: "/neuro-treino",
      prioridade: 1,
    });
  } else if (medio(risk.escolar)) {
    base.push({
      fonte: "neuro_treino",
      categoria: "alfabetizacao-brilha",
      titulo: "Alfabetização Brilha",
      descricao: "Reforço de letras e sons.",
      rota: "/neuro-treino",
      prioridade: 2,
    });
  }
  if (alto(risk.cognitivo) || medio(risk.cognitivo)) {
    base.push({
      fonte: "neuro_treino",
      categoria: "atencao-memoria",
      titulo: "Atenção e Memória",
      descricao: "Reação rápida, memória visual, sequências.",
      rota: "/neuro-treino",
      prioridade: alto(risk.cognitivo) ? 1 : 2,
    });
  }
  if (alto(risk.adaptativo) || medio(risk.adaptativo)) {
    base.push({
      fonte: "neuro_treino",
      categoria: "motora",
      titulo: "Coordenação Motora",
      descricao: "Traçado, mosaico, copiar figuras.",
      rota: "/neuro-treino",
      prioridade: alto(risk.adaptativo) ? 1 : 2,
    });
  }
  return base;
}

/** Brilha Vida filtrado pelo risco socioemocional/comportamental. */
function candidatosBrilhaVida(risk?: RiskMap): Candidato[] {
  const base: Candidato[] = [
    {
      fonte: "brilha_vida",
      categoria: "emocoes",
      titulo: "Emoções do Dia",
      descricao: "Nomeando o que sinto.",
      rota: "/brilha-vida",
      prioridade: 3,
    },
  ];
  if (!risk) return base;
  const alto = (n?: string) => n === "laranja" || n === "vermelho";
  const medio = (n?: string) => n === "amarelo";

  if (alto(risk.socioemocional) || alto(risk.comportamental)) {
    base.push({
      fonte: "brilha_vida",
      categoria: "sos-calma",
      titulo: "SOS Calma",
      descricao: "Respiração guiada e regulação.",
      rota: "/brilha-vida",
      prioridade: 1,
    });
  } else if (medio(risk.socioemocional) || medio(risk.comportamental)) {
    base.push({
      fonte: "brilha_vida",
      categoria: "sos-calma",
      titulo: "SOS Calma",
      descricao: "Ferramentas de autorregulação.",
      rota: "/brilha-vida",
      prioridade: 2,
    });
  }
  return base;
}

/**
 * Distribuição semanal por prioridade da anamnese:
 * - Se há risco alto socioemocional/comportamental → Brilha Vida vira 1º bloco do dia.
 * - Se há risco alto escolar/cognitivo → Neuro Treino ganha peso extra.
 * - Sempre há 1 bloco de Escola Brilha por dia (base curricular).
 */
function priorizarFontes(risk?: RiskMap): FonteBloco[] {
  const ordem: FonteBloco[] = ["escola_brilha", "neuro_treino", "brilha_vida"];
  if (!risk) return ordem;
  const alto = (n?: string) => n === "laranja" || n === "vermelho";

  if (alto(risk.socioemocional) || alto(risk.comportamental)) {
    return ["brilha_vida", "neuro_treino", "escola_brilha"];
  }
  if (alto(risk.escolar) || alto(risk.cognitivo) || alto(risk.adaptativo)) {
    return ["neuro_treino", "escola_brilha", "brilha_vida"];
  }
  return ordem;
}

/** Escolhe 4 blocos para um dia, rotacionando categorias entre as semanas. */
function blocosDoDia(
  semana: number,
  dia: number,
  pools: Record<FonteBloco, Candidato[]>,
  prioridade: FonteBloco[],
): Omit<BlocoPlano, "semana" | "dia_semana">[] {
  // Padrão: 2 blocos Escola + 1 Neuro + 1 Brilha Vida (5 min cada = 20)
  // Se a prioridade mudar, invertemos a ordem no dia (impacto visual e cognitivo).
  const plano: FonteBloco[] = (() => {
    // dia par vs ímpar alterna leve variação
    const impar = dia % 2 === 1;
    if (prioridade[0] === "brilha_vida") {
      return impar
        ? ["brilha_vida", "escola_brilha", "neuro_treino", "escola_brilha"]
        : ["brilha_vida", "neuro_treino", "escola_brilha", "escola_brilha"];
    }
    if (prioridade[0] === "neuro_treino") {
      return impar
        ? ["neuro_treino", "escola_brilha", "brilha_vida", "escola_brilha"]
        : ["neuro_treino", "escola_brilha", "escola_brilha", "brilha_vida"];
    }
    return impar
      ? ["escola_brilha", "neuro_treino", "escola_brilha", "brilha_vida"]
      : ["escola_brilha", "escola_brilha", "neuro_treino", "brilha_vida"];
  })();

  const idxByFonte: Record<FonteBloco, number> = {
    escola_brilha: 0,
    neuro_treino: 0,
    brilha_vida: 0,
  };
  // seed determinístico por semana+dia — mesma criança tem sempre a mesma sequência
  const seed = (semana * 7 + dia) | 0;

  return plano.map((fonte, ordem) => {
    const pool = pools[fonte];
    if (!pool.length) {
      // fallback pra Escola Brilha se pool vazio (não deve acontecer)
      const alt = pools.escola_brilha[0];
      return {
        fonte: alt.fonte,
        categoria: alt.categoria,
        titulo: alt.titulo,
        descricao: alt.descricao,
        rota: alt.rota,
        minutos: 5,
        prioridade: alt.prioridade,
        ordem,
      };
    }
    const i = (idxByFonte[fonte] + seed + ordem) % pool.length;
    idxByFonte[fonte]++;
    const c = pool[i];
    return {
      fonte: c.fonte,
      categoria: c.categoria,
      titulo: c.titulo,
      descricao: c.descricao,
      rota: c.rota,
      minutos: 5,
      prioridade: c.prioridade,
      ordem,
    };
  });
}

export interface GerarPlanoInput {
  idade: number;
  serie?: string;
  responses?: AnamneseV2Responses;
  risk?: RiskMap;
}

export function gerarPlanoAnual(input: GerarPlanoInput): PlanoAnualGerado {
  const idade = Math.max(3, Math.min(7, input.idade));
  const serie = input.serie || idadeParaSerie(idade);
  const risk = input.risk;
  const temAnamnese = !!risk;

  // 1º prioridade e ordena candidatos por prioridade (1 antes de 2, 2 antes de 3)
  const prioridade = priorizarFontes(risk);
  const ordenar = (arr: Candidato[]) =>
    [...arr].sort((a, b) => a.prioridade - b.prioridade);

  const pools: Record<FonteBloco, Candidato[]> = {
    escola_brilha: ordenar(candidatosEscola(idade)),
    neuro_treino: ordenar(candidatosNeuroTreino(risk)),
    brilha_vida: ordenar(candidatosBrilhaVida(risk)),
  };

  const semanas = 40;
  const dias = 5;
  const blocos: BlocoPlano[] = [];

  for (let s = 1; s <= semanas; s++) {
    for (let d = 1; d <= dias; d++) {
      const dia = blocosDoDia(s, d, pools, prioridade);
      for (const b of dia) {
        blocos.push({ semana: s, dia_semana: d, ...b });
      }
    }
  }

  return {
    idade,
    serie,
    minutos_por_dia: 20,
    dias_por_semana: dias,
    semanas_totais: semanas,
    blocos,
    base_anamnese: { tem_anamnese: temAnamnese, risk, prioridades: prioridade },
  };
}
