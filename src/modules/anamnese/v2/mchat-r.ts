// M-CHAT-R (Modified Checklist for Autism in Toddlers, Revised) — triagem 16-30 meses.
// 20 itens sim/não. A maioria pontua quando a resposta é NÃO (indicador de risco).
// Itens 2, 5 e 12 são reversos: pontuam quando a resposta é SIM.
// Classificação:
//   0-2  Risco baixo
//   3-7  Risco médio (recomendado follow-up estruturado — M-CHAT-R/F)
//   8-20 Risco alto (encaminhamento imediato para avaliação especializada)
// IMPORTANTE: triagem — NÃO é diagnóstico de TEA.

export type YesNo = "sim" | "nao";

export interface MCHATResponses {
  q1?: YesNo; q2?: YesNo; q3?: YesNo; q4?: YesNo; q5?: YesNo;
  q6?: YesNo; q7?: YesNo; q8?: YesNo; q9?: YesNo; q10?: YesNo;
  q11?: YesNo; q12?: YesNo; q13?: YesNo; q14?: YesNo; q15?: YesNo;
  q16?: YesNo; q17?: YesNo; q18?: YesNo; q19?: YesNo; q20?: YesNo;
}

export interface MCHATItem {
  k: keyof MCHATResponses;
  l: string;
  reverse?: boolean; // se true, "sim" = risco
}

export const MCHAT_ITEMS: MCHATItem[] = [
  { k: "q1", l: "Se você aponta para algo do outro lado do cômodo, seu(sua) filho(a) olha para o objeto?" },
  { k: "q2", l: "Você alguma vez já se perguntou se seu(sua) filho(a) é surdo(a)?", reverse: true },
  { k: "q3", l: "Seu(sua) filho(a) brinca de faz de conta (por exemplo, fingir beber de um copo vazio)?" },
  { k: "q4", l: "Seu(sua) filho(a) gosta de subir em coisas (móveis, brinquedos do parquinho, escadas)?" },
  { k: "q5", l: "Seu(sua) filho(a) faz movimentos incomuns com os dedos perto dos olhos (por exemplo, mexer os dedos perto dos olhos)?", reverse: true },
  { k: "q6", l: "Seu(sua) filho(a) aponta com o dedo para pedir alguma coisa ou para conseguir ajuda?" },
  { k: "q7", l: "Seu(sua) filho(a) aponta com o dedo para mostrar algo interessante para você?" },
  { k: "q8", l: "Seu(sua) filho(a) se interessa por outras crianças (observa, sorri, aproxima-se)?" },
  { k: "q9", l: "Seu(sua) filho(a) traz objetos até você ou levanta objetos para mostrá-los?" },
  { k: "q10", l: "Seu(sua) filho(a) responde quando você o(a) chama pelo nome?" },
  { k: "q11", l: "Quando você sorri para seu(sua) filho(a), ele(a) sorri de volta?" },
  { k: "q12", l: "Seu(sua) filho(a) se incomoda com ruídos do dia a dia (por exemplo, aspirador de pó, música alta)?", reverse: true },
  { k: "q13", l: "Seu(sua) filho(a) anda sem apoio?" },
  { k: "q14", l: "Seu(sua) filho(a) olha nos seus olhos quando você fala com ele(a), brinca ou o(a) veste?" },
  { k: "q15", l: "Seu(sua) filho(a) tenta imitar o que você faz (por exemplo, mandar beijo, bater palmas)?" },
  { k: "q16", l: "Se você vira a cabeça para olhar alguma coisa, seu(sua) filho(a) olha para ver o que você está olhando?" },
  { k: "q17", l: "Seu(sua) filho(a) tenta fazer com que você olhe para ele(a) (por exemplo, dizendo 'olha' ou puxando sua mão)?" },
  { k: "q18", l: "Seu(sua) filho(a) entende quando você manda fazer algo (por exemplo, 'coloque o livro na cadeira')?" },
  { k: "q19", l: "Se algo novo acontece, seu(sua) filho(a) olha para você para ver como você reage?" },
  { k: "q20", l: "Seu(sua) filho(a) gosta de atividades de movimento (balançar, pular no colo)?" },
];

export type MCHATLevel = "baixo" | "medio" | "alto";

export interface MCHATScore {
  score: number;          // 0..20 itens de risco
  answered: number;
  total: number;
  level: MCHATLevel | null; // null = ainda não dá para classificar
  flaggedKeys: (keyof MCHATResponses)[];
}

export function scoreMCHAT(r: MCHATResponses): MCHATScore {
  let score = 0;
  let answered = 0;
  const flaggedKeys: (keyof MCHATResponses)[] = [];
  for (const item of MCHAT_ITEMS) {
    const v = r[item.k];
    if (v !== "sim" && v !== "nao") continue;
    answered++;
    const risk = item.reverse ? v === "sim" : v === "nao";
    if (risk) {
      score++;
      flaggedKeys.push(item.k);
    }
  }
  let level: MCHATLevel | null = null;
  if (answered === MCHAT_ITEMS.length) {
    if (score <= 2) level = "baixo";
    else if (score <= 7) level = "medio";
    else level = "alto";
  }
  return { score, answered, total: MCHAT_ITEMS.length, level, flaggedKeys };
}

export const MCHAT_LEVEL_LABEL: Record<MCHATLevel, string> = {
  baixo: "Risco baixo",
  medio: "Risco médio",
  alto: "Risco alto",
};

export const MCHAT_LEVEL_COLOR: Record<MCHATLevel, string> = {
  baixo: "#16a34a",
  medio: "#ea580c",
  alto: "#dc2626",
};

export function mchatRecommendations(s: MCHATScore): string[] {
  if (s.level === null) {
    return ["Responda a todas as 20 perguntas para gerar a classificação de risco."];
  }
  if (s.level === "baixo") {
    return [
      "Risco baixo de sinais associados ao TEA nesta triagem.",
      "Manter acompanhamento do desenvolvimento em consultas pediátricas de rotina.",
      "Repetir a triagem se surgirem novas preocupações até os 30 meses de idade.",
    ];
  }
  if (s.level === "medio") {
    return [
      "Risco médio: indicado follow-up estruturado (M-CHAT-R/F) com profissional capacitado.",
      "Buscar avaliação com pediatra do desenvolvimento, neuropediatra ou psicólogo infantil.",
      "Estimular ambientes de interação social, comunicação por gestos e brincadeiras de imitação.",
      "Reduzir tempo de tela e oferecer leitura compartilhada diária.",
    ];
  }
  return [
    "Risco alto: encaminhamento imediato para avaliação especializada em desenvolvimento infantil.",
    "Considerar consulta com equipe multidisciplinar (neuropediatra, fonoaudiólogo, terapeuta ocupacional, psicólogo).",
    "Iniciar estratégias pedagógicas estruturadas (rotinas visuais, comunicação aumentativa, integração sensorial).",
    "Apoio familiar: orientação parental especializada e acompanhamento contínuo.",
  ];
}
