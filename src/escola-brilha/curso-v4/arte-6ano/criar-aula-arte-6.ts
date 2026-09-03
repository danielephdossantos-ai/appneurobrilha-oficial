import { criarUnidadeArte2 } from "../arte-2ano/criar-aula-arte-2";

type Config = Parameters<typeof criarUnidadeArte2>[0];

/** Adapta o contrato visual existente para linguagem investigativa dos anos finais. */
export function criarUnidadeArte6(config: Config) {
  const unidade = criarUnidadeArte2(config);
  const aula = unidade.aulas[0];
  aula.cena01_motivacao = {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: `Abra o dossiê de investigação sobre ${config.tema}. Nesta missão, evidência, experimentação e autoria precisam caminhar juntas.`,
    titulo: config.titulo,
    instrucao: "Analise os quatro eixos antes de formular sua hipótese.",
    itens: [
      { emoji: config.icone, rotulo: "Conceito", descricao: config.conceito, cor: config.cor ?? "#7c2d12" },
      { emoji: "🔎", rotulo: "Análise", descricao: "Observar contexto, elementos e escolhas.", cor: "#0ea5e9" },
      { emoji: "🧪", rotulo: "Experimentação", descricao: config.pratica, cor: "#f97316" },
      { emoji: "🧭", rotulo: "Reflexão", descricao: "Relacionar processo, resultado e contexto.", cor: "#16a34a" },
    ],
    falaFinal: "Uma leitura artística consistente usa evidências e reconhece diferentes interpretações.",
  };
  aula.cena08_voceLe = {
    tipo: "diarioPintor",
    aurora: "Leia o registro de processo e identifique as decisões do autor.",
    titulo: `Dossiê de processo — ${config.titulo}`,
    trechos: [
      { texto: "Comecei pesquisando o", palavraDestaque: "contexto", corDestaque: "#0ea5e9" },
      { texto: "Depois selecionei os", palavraDestaque: "elementos", corDestaque: "#f97316" },
      { texto: "Experimentei e registrei o", palavraDestaque: "processo", corDestaque: "#7c3aed" },
      { texto: "Revisei a produção e justifiquei minhas", palavraDestaque: "escolhas", corDestaque: "#16a34a" },
    ],
  };
  return unidade;
}
