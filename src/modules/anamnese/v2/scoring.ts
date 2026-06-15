// Motor de pontuação da Anamnese Científica v2.
// IMPORTANTE: NÃO emite diagnóstico — apenas níveis de indicadores.
import type { AnamneseV2Responses, Likert, PerfilScores, RiskLevel, RiskMap } from "./types";

const L = (v: any): number => (typeof v === "number" ? v : 0);
const INV = (v: any): number => 4 - L(v); // inverte itens "positivos"

const SN_BAD = (v: any) => (v === "sim" ? 4 : 0);

function avg(values: number[]): number {
  if (values.length === 0) return 0;
  const s = values.reduce((a, b) => a + b, 0);
  return s / values.length;
}

/** Converte média 0-4 em score 0-100 (% de indicadores presentes) */
function toScore(meanLikert: number): number {
  return Math.round((meanLikert / 4) * 100);
}

export function computeScores(r: AnamneseV2Responses): PerfilScores {
  // ATENÇÃO + FUNÇÕES EXECUTIVAS + MEMÓRIA  → Cognitivo
  const at = r.step7 ?? {};
  const mem = r.step13 ?? {};
  const fe = r.step17 ?? {}; // funções executivas
  const cognitivoMean = avg([
    L(at.distrai_facil),
    L(at.esquece_instrucoes),
    L(at.perde_objetos),
    L(at.dificuldade_concluir),
    L(at.evita_concentracao),
    INV(at.mantem_foco_escolar),
    INV(mem.recorda_instrucoes),
    INV(mem.recorda_historias),
    INV(mem.memoriza_sequencias),
    INV(mem.reconhece_informacoes),
    INV(fe.memoria_trabalho),
    INV(fe.planejamento),
    INV(fe.controle_inibitorio),
    INV(fe.flexibilidade_cognitiva),
    INV(fe.organizacao_pensamento),
    INV(fe.iniciativa),
  ]);

  // ESCOLAR (leitura/escrita/matemática — todos "positivos", invertidos)
  const e = r.step6 ?? {};
  const escolarMean = avg([
    INV(e.reconhece_letras),
    INV(e.reconhece_silabas),
    INV(e.le_palavras),
    INV(e.le_frases),
    INV(e.le_textos),
    INV(e.compreende_textos),
    INV(e.copia_palavras),
    INV(e.escreve_espontaneamente),
    L(e.troca_letras), // negativo: alto = problema
    INV(e.organiza_frases),
    INV(e.reconhece_numeros),
    INV(e.conta_objetos),
    INV(e.adicao),
    INV(e.subtracao),
    INV(e.problemas_simples),
  ]);

  // COMPORTAMENTAL: hiperatividade + repetitivos
  const h = r.step8 ?? {};
  const rep = r.step10 ?? {};
  const comportamentalMean = avg([
    L(h.levanta_constantemente),
    L(h.corre_excessivamente),
    L(h.interrompe_conversas),
    L(h.responde_antes),
    L(h.dificuldade_esperar),
    L(rep.alinha_objetos),
    L(rep.movimentos_repetitivos),
    L(rep.interesses_restritos),
    L(rep.resistencia_mudancas),
    L(rep.rotinas_rigidas),
  ]);

  // SOCIOEMOCIONAL: comunicação social (invertida) + emocional
  const c = r.step9 ?? {};
  const em = r.step15 ?? {};
  const socioemocionalMean = avg([
    INV(c.responde_chamado),
    INV(c.mantem_contato_visual),
    INV(c.compartilha_interesses),
    INV(c.demonstra_emocoes),
    INV(c.entende_expressoes),
    L(em.ansiedade),
    L(em.irritabilidade),
    L(em.baixa_autoestima),
    L(em.frustracao),
    L(em.mudancas_humor),
  ]);

  // ADAPTATIVO: autonomia (invertida) + motora (invertida) + sensorial
  const au = r.step16 ?? {};
  const mot = r.step14 ?? {};
  const sen = r.step11 ?? {};
  const ling = r.step12 ?? {};
  const adaptativoMean = avg([
    INV(au.alimentacao),
    INV(au.higiene),
    INV(au.vestuario),
    INV(au.organizacao_materiais),
    INV(au.independencia_diaria),
    INV(mot.segura_lapis),
    INV(mot.recorta),
    INV(mot.abotoa),
    INV(mot.manipula_pequenos),
    INV(mot.corre),
    INV(mot.salta),
    INV(mot.equilibra),
    INV(mot.chuta_bola),
    L(sen.sensibilidade_sons),
    L(sen.sensibilidade_luz),
    L(sen.sensibilidade_toque),
    L(sen.seletividade_alimentar),
    L(sen.busca_estimulos),
    INV(ling.compreende_instrucoes),
    INV(ling.nomeia_objetos),
    INV(ling.conta_historias),
    INV(ling.formula_frases),
    L(ling.trocas_fonologicas),
  ]);

  return {
    cognitivo: toScore(cognitivoMean),
    escolar: toScore(escolarMean),
    comportamental: toScore(comportamentalMean),
    socioemocional: toScore(socioemocionalMean),
    adaptativo: toScore(adaptativoMean),
  };
}

export function classifyRisk(score: number): RiskLevel {
  if (score <= 25) return "verde";
  if (score <= 50) return "amarelo";
  if (score <= 75) return "laranja";
  return "vermelho";
}

export function computeRiskMap(scores: PerfilScores): RiskMap {
  const order: RiskLevel[] = ["verde", "amarelo", "laranja", "vermelho"];
  const each = {
    cognitivo: classifyRisk(scores.cognitivo),
    escolar: classifyRisk(scores.escolar),
    comportamental: classifyRisk(scores.comportamental),
    socioemocional: classifyRisk(scores.socioemocional),
    adaptativo: classifyRisk(scores.adaptativo),
  };
  const max = Object.values(each).reduce(
    (acc, r) => (order.indexOf(r) > order.indexOf(acc) ? r : acc),
    "verde" as RiskLevel,
  );
  return { ...each, global: max };
}

export const RISK_LABEL: Record<RiskLevel, string> = {
  verde: "Desenvolvimento dentro do esperado",
  amarelo: "Sinais leves — recomenda-se monitoramento",
  laranja: "Indicadores que sugerem avaliação especializada",
  vermelho: "Indicadores significativos — encaminhamento prioritário",
};

export const RISK_COLOR: Record<RiskLevel, string> = {
  verde: "#16a34a",
  amarelo: "#eab308",
  laranja: "#ea580c",
  vermelho: "#dc2626",
};

export const RISK_BG: Record<RiskLevel, string> = {
  verde: "bg-green-100 text-green-900 border-green-300",
  amarelo: "bg-yellow-100 text-yellow-900 border-yellow-300",
  laranja: "bg-orange-100 text-orange-900 border-orange-300",
  vermelho: "bg-red-100 text-red-900 border-red-300",
};

export const PERFIL_LABEL: Record<keyof PerfilScores, string> = {
  cognitivo: "Cognitivo",
  escolar: "Escolar",
  comportamental: "Comportamental",
  socioemocional: "Socioemocional",
  adaptativo: "Adaptativo",
};
