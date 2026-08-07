// Plano Neuro — transforma o resultado da anamnese nas aulas do Neuro Treino
// distribuídas em semanas/dias, para virar rotina diária da criança.
import type { PerfilScores, RiskMap } from "@/modules/anamnese/v2/types";
import {
  recomendarAtividadesTerapeuticas,
  type AtividadeTerapeutica,
} from "@/modules/anamnese/relatorio/neuro-bridge";
import { CATEGORIAS, type CategoriaSlug } from "@/data/neuro-treino/variations";

export const DIAS_LABEL = ["", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export interface ItemNeuro {
  semana: number;
  dia_semana: number; // 1 = Seg ... 5 = Sex
  ordem: number;
  slug: string;
  nome: string;
  emoji: string;
  grupo: string;
  objetivo: string;
  por_que: string;
  prioridade: number; // 1 = alta
  rota: string;
  minutos: number;
}

export interface PlanoNeuroGerado {
  semanas: number;
  dias_por_semana: number;
  sessoes_por_dia: number;
  itens: ItemNeuro[];
  atividades: AtividadeTerapeutica[];
}

/** Kit padrão quando a anamnese ainda não foi feita. */
const KIT_BASE: CategoriaSlug[] = [
  "memoria-visual",
  "seguir-instrucao",
  "consciencia-fonologica",
  "letra-som",
  "toque-sequencia",
  "expressao-emocao",
];

function kitPadrao(): AtividadeTerapeutica[] {
  return KIT_BASE.flatMap((slug) => {
    const meta = CATEGORIAS[slug];
    if (!meta) return [];
    return [
      {
        slug,
        nome: meta.nome,
        emoji: meta.emoji,
        grupo: meta.grupo,
        objetivo: meta.objetivo,
        porQue: "Kit inicial de estimulação — refaça a anamnese para personalizar.",
        prioridade: 2 as const,
        rota: `/neuro-treino/${slug}`,
      },
    ];
  });
}

export interface GerarNeuroInput {
  scores?: PerfilScores | null;
  risk?: RiskMap | null;
  semanas?: number;
  diasPorSemana?: number;
  sessoesPorDia?: number;
}

/**
 * Monta o plano: atividades recomendadas pela anamnese em rotação diária,
 * priorizando as de prioridade 1 (áreas em risco) no início da semana.
 */
export function gerarPlanoNeuro(input: GerarNeuroInput): PlanoNeuroGerado {
  const semanas = input.semanas ?? 12;
  const diasPorSemana = Math.min(7, Math.max(1, input.diasPorSemana ?? 5));
  const sessoesPorDia = Math.min(4, Math.max(1, input.sessoesPorDia ?? 2));

  const atividades =
    input.scores && input.risk
      ? recomendarAtividadesTerapeuticas(input.scores, input.risk)
      : kitPadrao();

  const lista = (atividades.length > 0 ? atividades : kitPadrao())
    .slice()
    .sort((a, b) => a.prioridade - b.prioridade);

  const itens: ItemNeuro[] = [];
  let cursor = 0;

  for (let semana = 1; semana <= semanas; semana++) {
    for (let dia = 1; dia <= diasPorSemana; dia++) {
      for (let s = 1; s <= sessoesPorDia; s++) {
        const a = lista[cursor % lista.length];
        cursor++;
        itens.push({
          semana,
          dia_semana: dia,
          ordem: s,
          slug: a.slug,
          nome: a.nome,
          emoji: a.emoji,
          grupo: a.grupo,
          objetivo: a.objetivo,
          por_que: a.porQue,
          prioridade: a.prioridade,
          rota: a.rota,
          minutos: a.prioridade === 1 ? 10 : 8,
        });
      }
    }
  }

  return { semanas, dias_por_semana: diasPorSemana, sessoes_por_dia: sessoesPorDia, itens, atividades: lista };
}

/** Semana atual do plano (1..semanas) a partir da data de geração. */
export function semanaAtualNeuro(geradoEm: string, semanas: number): number {
  const inicio = new Date(geradoEm);
  const dias = Math.max(0, Math.floor((Date.now() - inicio.getTime()) / 86400000));
  return Math.min(semanas, Math.floor(dias / 7) + 1);
}

/** 1..5 (Seg..Sex); fim de semana cai em segunda. */
export function diaSemanaHoje(): number {
  const d = new Date().getDay();
  return d === 0 || d === 6 ? 1 : d;
}
