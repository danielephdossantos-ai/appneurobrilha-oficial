import type { PerfilScores, RiskLevel, RiskMap } from "./types";
import { classifyRisk } from "./scoring";

const RECS: Record<keyof PerfilScores, Record<RiskLevel, string[]>> = {
  cognitivo: {
    verde: ["Continue estimulando jogos de memória e desafios curtos diários."],
    amarelo: [
      "Faça pausas a cada 15 minutos durante tarefas escolares.",
      "Use lembretes visuais e listas com poucos itens.",
    ],
    laranja: [
      "Considere avaliação com psicopedagogo ou neuropsicólogo.",
      "Reduza distrações no ambiente de estudo.",
    ],
    vermelho: [
      "Recomenda-se avaliação neuropsicológica completa em caráter prioritário.",
      "Procure orientação pedagógica especializada na escola.",
    ],
  },
  escolar: {
    verde: ["Mantenha a rotina de leitura compartilhada e atividades de cálculo lúdico."],
    amarelo: [
      "Reforce reconhecimento de letras/sílabas com jogos diários (10–15 min).",
      "Use materiais concretos (palitos, fichas) para matemática.",
    ],
    laranja: [
      "Consulte um psicopedagogo para investigar dificuldades de aprendizagem.",
      "Solicite plano de apoio individualizado na escola.",
    ],
    vermelho: [
      "Encaminhe para avaliação fonoaudiológica e psicopedagógica.",
      "Investigue possíveis transtornos específicos de aprendizagem.",
    ],
  },
  comportamental: {
    verde: ["Mantenha rotinas previsíveis e reforço positivo."],
    amarelo: [
      "Implemente um quadro visual de rotina e regras claras.",
      "Ofereça atividades físicas regulares para canalizar energia.",
    ],
    laranja: [
      "Considere avaliação com neuropediatra ou psicólogo infantil.",
      "Use sistema de recompensas para comportamentos-alvo.",
    ],
    vermelho: [
      "Avaliação neuropediátrica e/ou psiquiátrica infantil recomendada.",
      "Acompanhamento psicoterapêutico semanal sugerido.",
    ],
  },
  socioemocional: {
    verde: ["Continue estimulando brincadeiras em grupo e nomeação de emoções."],
    amarelo: [
      "Trabalhe identificação de emoções com livros e jogos.",
      "Crie espaços seguros para a criança expressar sentimentos.",
    ],
    laranja: [
      "Recomenda-se acompanhamento psicológico infantil.",
      "Observe gatilhos emocionais e registre padrões.",
    ],
    vermelho: [
      "Encaminhamento prioritário para psicoterapia infantil.",
      "Avaliação para investigar TEA e/ou transtornos de humor pode ser indicada.",
    ],
  },
  adaptativo: {
    verde: ["Continue estimulando autonomia em pequenas tarefas diárias."],
    amarelo: [
      "Inclua exercícios de coordenação motora fina (recortar, modelar, desenhar).",
      "Ofereça escolhas estruturadas para fortalecer autonomia.",
    ],
    laranja: [
      "Avaliação com terapeuta ocupacional é recomendada.",
      "Reduza sobrecarga sensorial no ambiente.",
    ],
    vermelho: [
      "Encaminhamento para terapia ocupacional em caráter prioritário.",
      "Investigar transtorno de processamento sensorial.",
    ],
  },
};

export function getRecommendations(scores: PerfilScores) {
  const out: { area: keyof PerfilScores; level: RiskLevel; items: string[] }[] = [];
  (Object.keys(scores) as (keyof PerfilScores)[]).forEach((k) => {
    const level = classifyRisk(scores[k]);
    out.push({ area: k, level, items: RECS[k][level] });
  });
  return out;
}

export function focusAreas(scores: PerfilScores): (keyof PerfilScores)[] {
  return (Object.keys(scores) as (keyof PerfilScores)[])
    .filter((k) => scores[k] >= 51) // laranja+ vermelho
    .sort((a, b) => scores[b] - scores[a]);
}

export function needsProfessionalReferral(risk: RiskMap): boolean {
  return risk.global === "laranja" || risk.global === "vermelho";
}
