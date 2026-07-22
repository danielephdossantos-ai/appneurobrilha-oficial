// Ponte entre a Anamnese e o Neuro Treino:
// Recebe scores + risk da anamnese e sugere categorias reais do Neuro Treino
// (slugs existentes em @/data/neuro-treino/variations) por prioridade.
import type { PerfilScores, RiskMap, RiskLevel } from "@/modules/anamnese/v2/types";
import { CATEGORIAS, type CategoriaSlug } from "@/data/neuro-treino/variations";

export interface AtividadeTerapeutica {
  slug: CategoriaSlug;
  nome: string;
  emoji: string;
  grupo: string;
  objetivo: string;
  porQue: string; // motivo humanizado da recomendação
  prioridade: 1 | 2 | 3; // 1 = alta
  rota: string;
}

/** Mapa: área de risco da anamnese → categorias do Neuro Treino que ajudam. */
const AREA_TO_CATEGORIAS: Record<keyof PerfilScores, CategoriaSlug[]> = {
  cognitivo: [
    "achar-diferente",
    "memoria-visual",
    "reacao-rapida",
    "seguir-instrucao",
    "toque-sequencia",
    "sequencia-e-padrao",
  ],
  escolar: [
    "letra-som",
    "palavra-imagem",
    "formando-palavras",
    "leitura-palavras",
    "completar-letra",
    "consciencia-fonologica",
    "consciencia-silabica",
    "compreensao-leitora",
  ],
  comportamental: [
    "ritmo-batidas",
    "ritmo-e-sopro",
    "alvo-movel",
    "reacao-rapida",
  ],
  socioemocional: [
    "expressao-emocao",
    "triagem-categorias",
    "vocabulario-semantico",
  ],
  adaptativo: [
    "copiar-figura",
    "tracado-letras",
    "mosaico-de-formas",
    "articulacao-sons",
    "discriminacao-auditiva",
    "onomatopeias-animadas",
    "paromatopeias-corpo",
  ],
};

const AREA_PORQUE: Record<keyof PerfilScores, string> = {
  cognitivo:
    "Fortalece atenção, memória de trabalho e velocidade de processamento.",
  escolar:
    "Constrói leitura e escrita passo a passo com apoio visual e auditivo.",
  comportamental:
    "Ajuda a regular impulso, ritmo corporal e espera com jogos curtos.",
  socioemocional:
    "Amplia reconhecimento de emoções e comunicação social.",
  adaptativo:
    "Trabalha coordenação motora fina, fala e regulação sensorial.",
};

function nivelParaPrioridade(nivel: RiskLevel): 1 | 2 | 3 | null {
  if (nivel === "vermelho") return 1;
  if (nivel === "laranja") return 1;
  if (nivel === "amarelo") return 2;
  return 3;
}

export function recomendarAtividadesTerapeuticas(
  scores: PerfilScores,
  risk: RiskMap,
): AtividadeTerapeutica[] {
  const vistos = new Set<CategoriaSlug>();
  const out: AtividadeTerapeutica[] = [];

  const areas = (Object.keys(scores) as (keyof PerfilScores)[]).sort(
    (a, b) => scores[b] - scores[a],
  );

  for (const area of areas) {
    const nivel = risk[area];
    const prioridade = nivelParaPrioridade(nivel);
    if (!prioridade) continue;

    const slugs = AREA_TO_CATEGORIAS[area] ?? [];
    for (const slug of slugs) {
      if (vistos.has(slug)) continue;
      const meta = CATEGORIAS[slug];
      if (!meta) continue;
      vistos.add(slug);
      out.push({
        slug,
        nome: meta.nome,
        emoji: meta.emoji,
        grupo: meta.grupo,
        objetivo: meta.objetivo,
        porQue: AREA_PORQUE[area],
        prioridade,
        rota: `/neuro-treino/${slug}`,
      });
      if (out.length >= 12) return out;
    }
  }

  // Se tudo verde, ainda assim sugere um kit leve de manutenção.
  if (out.length === 0) {
    (["memoria-visual", "sequencia-de-cores", "expressao-emocao"] as CategoriaSlug[]).forEach(
      (slug) => {
        const meta = CATEGORIAS[slug];
        if (!meta) return;
        out.push({
          slug,
          nome: meta.nome,
          emoji: meta.emoji,
          grupo: meta.grupo,
          objetivo: meta.objetivo,
          porQue: "Manutenção de habilidades já desenvolvidas.",
          prioridade: 3,
          rota: `/neuro-treino/${slug}`,
        });
      },
    );
  }

  return out;
}

/** Categorias de apoio agrupadas por grupo (para a seção "o app vai auxiliar em"). */
export function agruparPorGrupo(atividades: AtividadeTerapeutica[]) {
  const map = new Map<string, AtividadeTerapeutica[]>();
  for (const a of atividades) {
    const arr = map.get(a.grupo) ?? [];
    arr.push(a);
    map.set(a.grupo, arr);
  }
  return Array.from(map.entries()).map(([grupo, itens]) => ({ grupo, itens }));
}
