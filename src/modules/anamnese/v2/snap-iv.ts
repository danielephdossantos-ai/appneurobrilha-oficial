// Escala SNAP-IV (Swanson, Nolan and Pelham, versão IV) — triagem para indicadores de TDAH.
// 18 itens: 9 de Desatenção + 9 de Hiperatividade/Impulsividade (5 hiperatividade + 4 impulsividade).
// Escala 0-3: 0=Nem um pouco · 1=Só um pouco · 2=Bastante · 3=Demais.
// Pontos de corte (versão pais, Swanson et al.):
//   Desatenção: média ≥ 1,78
//   Hiperatividade/Impulsividade: média ≥ 1,44
// IMPORTANTE: triagem — NÃO é diagnóstico clínico.

export type SnapAnswer = 0 | 1 | 2 | 3;

export interface SnapIVResponses {
  // Desatenção (1-9)
  d1?: SnapAnswer; d2?: SnapAnswer; d3?: SnapAnswer; d4?: SnapAnswer; d5?: SnapAnswer;
  d6?: SnapAnswer; d7?: SnapAnswer; d8?: SnapAnswer; d9?: SnapAnswer;
  // Hiperatividade (10-14) e Impulsividade (15-18)
  h1?: SnapAnswer; h2?: SnapAnswer; h3?: SnapAnswer; h4?: SnapAnswer; h5?: SnapAnswer;
  i1?: SnapAnswer; i2?: SnapAnswer; i3?: SnapAnswer; i4?: SnapAnswer;
}

export const SNAP_LABELS = ["Nem um pouco", "Só um pouco", "Bastante", "Demais"];

export const SNAP_DESATENCAO: { k: keyof SnapIVResponses; l: string }[] = [
  { k: "d1", l: "Não presta atenção em detalhes ou comete erros por descuido nas tarefas escolares." },
  { k: "d2", l: "Tem dificuldade de manter a atenção em tarefas ou brincadeiras." },
  { k: "d3", l: "Parece não escutar quando se fala diretamente com ele(a)." },
  { k: "d4", l: "Não segue instruções até o fim e não termina deveres escolares ou tarefas." },
  { k: "d5", l: "Tem dificuldade para organizar tarefas e atividades." },
  { k: "d6", l: "Evita, não gosta ou reluta em iniciar tarefas que exigem esforço mental contínuo." },
  { k: "d7", l: "Perde coisas necessárias para tarefas ou atividades." },
  { k: "d8", l: "Distrai-se facilmente com estímulos externos." },
  { k: "d9", l: "Esquece-se de atividades cotidianas." },
];

export const SNAP_HIPERATIVIDADE: { k: keyof SnapIVResponses; l: string }[] = [
  { k: "h1", l: "Mexe as mãos/pés ou se remexe na cadeira." },
  { k: "h2", l: "Levanta-se em situações em que se espera que fique sentado(a)." },
  { k: "h3", l: "Corre ou escala em situações inadequadas (em adolescentes: sensação de inquietação)." },
  { k: "h4", l: "Tem dificuldade para brincar ou se envolver em atividades de lazer em silêncio." },
  { k: "h5", l: "Está 'a mil' ou agindo como se estivesse 'a todo vapor'." },
];

export const SNAP_IMPULSIVIDADE: { k: keyof SnapIVResponses; l: string }[] = [
  { k: "i1", l: "Fala em excesso." },
  { k: "i2", l: "Responde a perguntas de forma precipitada, antes que sejam concluídas." },
  { k: "i3", l: "Tem dificuldade para esperar a sua vez." },
  { k: "i4", l: "Interrompe ou se intromete em conversas ou brincadeiras." },
];

export const SNAP_ALL = [...SNAP_DESATENCAO, ...SNAP_HIPERATIVIDADE, ...SNAP_IMPULSIVIDADE];

export interface SnapIVScore {
  desatencaoMean: number;          // 0..3
  hiperatividadeMean: number;      // 0..3 (apenas itens H)
  impulsividadeMean: number;       // 0..3 (apenas itens I)
  hiperImpulsividadeMean: number;  // 0..3 (H+I combinados — corte oficial)
  desatencaoFlag: boolean;
  hiperImpulsividadeFlag: boolean;
  answered: number;
  total: number;
}

const CUTOFF_DESATENCAO = 1.78;
const CUTOFF_HIPER_IMPULS = 1.44;

function meanOf(r: SnapIVResponses, keys: (keyof SnapIVResponses)[]): number {
  const vals: number[] = [];
  for (const k of keys) {
    const v = r[k];
    if (typeof v === "number") vals.push(v);
  }
  if (vals.length === 0) return 0;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

export function scoreSnapIV(r: SnapIVResponses): SnapIVScore {
  const dKeys = SNAP_DESATENCAO.map((x) => x.k);
  const hKeys = SNAP_HIPERATIVIDADE.map((x) => x.k);
  const iKeys = SNAP_IMPULSIVIDADE.map((x) => x.k);
  const desatencaoMean = meanOf(r, dKeys);
  const hiperatividadeMean = meanOf(r, hKeys);
  const impulsividadeMean = meanOf(r, iKeys);
  const hiperImpulsividadeMean = meanOf(r, [...hKeys, ...iKeys]);
  const allKeys = [...dKeys, ...hKeys, ...iKeys];
  const answered = allKeys.filter((k) => typeof r[k] === "number").length;
  return {
    desatencaoMean,
    hiperatividadeMean,
    impulsividadeMean,
    hiperImpulsividadeMean,
    desatencaoFlag: desatencaoMean >= CUTOFF_DESATENCAO,
    hiperImpulsividadeFlag: hiperImpulsividadeMean >= CUTOFF_HIPER_IMPULS,
    answered,
    total: allKeys.length,
  };
}

export function snapRecommendations(s: SnapIVScore): string[] {
  const out: string[] = [];
  if (s.desatencaoFlag && s.hiperImpulsividadeFlag) {
    out.push(
      "Indicadores combinados de desatenção e hiperatividade/impulsividade acima do corte de triagem — recomenda-se avaliação especializada (neuropediatra ou psiquiatra infantil).",
    );
  } else if (s.desatencaoFlag) {
    out.push(
      "Indicadores predominantes de desatenção acima do corte de triagem — recomenda-se avaliação especializada.",
    );
  } else if (s.hiperImpulsividadeFlag) {
    out.push(
      "Indicadores predominantes de hiperatividade/impulsividade acima do corte de triagem — recomenda-se avaliação especializada.",
    );
  } else {
    out.push("Indicadores abaixo do ponto de corte de triagem — manter acompanhamento de rotina.");
  }
  if (s.desatencaoMean >= 1) {
    out.push("Estratégias pedagógicas: dividir tarefas em passos curtos, usar apoio visual e pausas frequentes.");
  }
  if (s.hiperImpulsividadeMean >= 1) {
    out.push("Estratégias comportamentais: rotinas previsíveis, sinais visuais de transição e reforço positivo imediato.");
  }
  return out;
}
