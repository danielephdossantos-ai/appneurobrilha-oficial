import type { AulaGeoV1 } from "../types";
import { aula01 as aulaBase } from "./unidade-6/aula-01-som-vibracao";

type Questao = {
  pergunta: string;
  opcoes: [string, string, string, string];
  correta: number;
  explicacao: string;
};

type Config = {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string[];
  tema: string;
  conceito: string;
  explicacao: string;
  exemplo: string;
  vocabulario: [string, string, string];
  etapas: [string, string, string, string];
  questoes: [Questao, Questao, Questao];
  missao: string;
};

/** Reaproveita o player oficial de 11 cenas e troca todo o conteúdo pedagógico. */
export function criarAulaConsolidacao(config: Config): AulaGeoV1 {
  const aula = structuredClone(aulaBase) as any;
  aula.slug = config.slug;
  aula.titulo = config.titulo;
  aula.iconeTrilha = config.icone;
  aula.bncc = config.bncc;
  aula.duracaoMin = 30;

  aula.cena01_motivacao = {
    ...aula.cena01_motivacao,
    instrucao: `Observe uma situação sobre ${config.tema}.`, mapaUrl: "", imagemDestaqueUrl: "",
    aurora: config.explicacao, falaFinal: `Vamos investigar ${config.conceito}.`,
  };
  const q0 = config.questoes[0];
  aula.cena02_previsao = {
    ...aula.cena02_previsao, aurora: "Faça uma hipótese antes de responder.", pergunta: q0.pergunta, fotoUrl: "",
    opcoes: q0.opcoes.map((titulo, i) => ({ id: `o${i}`, titulo, subtitulo: i === q0.correta ? "analise com atenção" : "compare com as evidências", emoji: ["🔎", "🧭", "📚", "🧩"][i], cor: "from-emerald-500 to-green-700" })),
    respostaCerta: `o${q0.correta}`, feedbackAcerto: q0.explicacao, feedbackErro: `Observe novamente. ${q0.explicacao}`, falaFinal: config.conceito,
  };
  aula.cena03_vocabulario = {
    ...aula.cena03_vocabulario, aurora: "Palavras importantes da investigação.", instrucao: "Leia os conceitos",
    cadernos: config.vocabulario.map((palavra, i) => ({ id: `v${i}`, capa: palavra.toUpperCase(), emoji: ["🔬", "🌍", "📌"][i], cor: "from-cyan-500 to-blue-700", conteudo: i === 0 ? config.conceito : config.explicacao, exemplo: config.exemplo, fotoUrl: "" })),
    falaFinal: "Vocabulário preparado.",
  };
  aula.cena04_leituraGuiada = {
    ...aula.cena04_leituraGuiada, aurora: `Mapa de ${config.tema}.`, instrucao: "Toque em cada parte", mapaUrl: "",
    pontos: config.etapas.map((texto, i) => ({ id: `p${i}`, x: 15 + i * 22, y: 25 + (i % 2) * 35, emoji: ["1️⃣", "2️⃣", "3️⃣", "4️⃣"][i], cor: "from-emerald-500 to-green-700", titulo: texto, texto: `${texto}: ${config.explicacao}`, fotoUrl: "" })),
    falaFinal: config.exemplo,
  };
  const perguntas = config.questoes.map((q, qi) => ({
    id: `q${qi + 1}`, pergunta: q.pergunta, fotoUrl: "",
    cards: q.opcoes.map((titulo, i) => ({ id: `o${i}`, emoji: ["🔎", "🌱", "🌎", "📘"][i], titulo, cor: "from-emerald-500 to-green-700" })),
    correta: `o${q.correta}`, feedbackAcerto: q.explicacao, feedbackErro: `Releia a explicação: ${q.explicacao}`,
  }));
  aula.cena05_compreensao = { ...aula.cena05_compreensao, aurora: "Aplique o que aprendeu.", instrucao: "Escolha entre quatro respostas", perguntas, falaFinal: "Análise concluída." };
  aula.cena06_personagensLugar = {
    ...aula.cena06_personagensLugar, aurora: "Observe e explique.", instrucao: "Compare as duas camadas", mapaUrl: "",
    camadas: [
      { id: "observar", rotulo: "Observar", emoji: "👀", cor: "from-cyan-500 to-blue-700", rect: { x: 3, y: 25, w: 45, h: 65 }, descricao: config.exemplo, fotoUrl: "" },
      { id: "explicar", rotulo: "Explicar", emoji: "💡", cor: "from-emerald-500 to-green-700", rect: { x: 52, y: 25, w: 45, h: 65 }, descricao: config.explicacao, fotoUrl: "" },
    ], falaFinal: "Ciência liga observação e explicação.",
  };
  aula.cena07_sequencia = {
    ...aula.cena07_sequencia, aurora: "Organize a investigação.", instrucao: "Toque na ordem", pergunta: config.missao,
    paradas: config.etapas.map((texto, i) => ({ id: `e${i}`, emoji: ["👀", "❓", "📋", "💡"][i], rotulo: `${i + 1}. ${texto}`, descricao: config.explicacao, fotoUrl: "" })),
    ordemCerta: ["e0", "e1", "e2", "e3"], feedbackAcerto: "Sequência correta!", feedbackErro: "Comece observando e termine explicando.", falaFinal: "Investigação organizada.",
  };
  aula.cena08_voceLe = {
    ...aula.cena08_voceLe, aurora: "Leitura científica.", tituloLivro: `🔬 Relatório: ${config.tema}`, subtitulo: config.conceito,
    paragrafos: [
      { id: "p1", texto: config.explicacao, chaves: [config.vocabulario[0]], definicoes: { [config.vocabulario[0]]: config.conceito }, fotoUrl: "" },
      { id: "p2", texto: config.exemplo, chaves: [config.vocabulario[1]], definicoes: { [config.vocabulario[1]]: config.explicacao }, fotoUrl: "" },
      { id: "p3", texto: config.missao, chaves: [config.vocabulario[2]], definicoes: { [config.vocabulario[2]]: config.conceito }, fotoUrl: "" },
    ], falaFinal: "Relatório lido.",
  };
  aula.cena09_minijogo = {
    ...aula.cena09_minijogo, aurora: "Classifique as evidências.", instrucao: "Escolha a explicação correta", duracaoSegundos: 30,
    pecas: [{ id: "conceito", emoji: "🔬", rotulo: config.conceito }, { id: "exemplo", emoji: "📌", rotulo: "Exemplo" }, { id: "evidencia", emoji: "🔎", rotulo: "Evidência" }, { id: "conclusao", emoji: "💡", rotulo: "Conclusão" }],
    rodadas: [
      { id: "r1", municipioA: { nome: config.tema, emoji: "🌍", cor: "from-cyan-500 to-blue-700" }, municipioB: { nome: "Situação observada", emoji: "👀", cor: "from-emerald-500 to-green-700" }, contexto: config.exemplo, pecaCertaId: "exemplo", fotoUrl: "", feedbackAcerto: "É um exemplo observado.", feedbackErro: "Procure a peça Exemplo." },
      { id: "r2", municipioA: { nome: "Explicação", emoji: "💡", cor: "from-purple-500 to-pink-700" }, municipioB: { nome: "Ideia principal", emoji: "📘", cor: "from-amber-500 to-orange-700" }, contexto: config.explicacao, pecaCertaId: "conceito", fotoUrl: "", feedbackAcerto: "Conceito identificado.", feedbackErro: "Procure a ideia principal." },
    ], falaFinal: "Evidências classificadas.",
  };
  aula.cena10_revisao = {
    ...aula.cena10_revisao, aurora: "Resumo da investigação.", instrucao: "Toque nas duas partes", fotoUrl: "",
    fatias: [
      { id: "conceito", rotulo: "Conceito", emoji: "📘", percentual: 50, cor: "#059669", descricao: config.conceito, exemplos: [config.explicacao], fotoUrl: "" },
      { id: "evidencia", rotulo: "Evidência", emoji: "🔎", percentual: 50, cor: "#06b6d4", descricao: config.exemplo, exemplos: [config.missao], fotoUrl: "" },
    ], falaFinal: "Conceito e evidência conectados.",
  };
  aula.cena11_avaliacao = {
    ...aula.cena11_avaliacao, aurora: "Avaliação final.", instrucao: "Responda três questões", fotoUrl: "",
    perguntas: config.questoes.map((q, qi) => ({ id: `q${qi + 1}`, pergunta: q.pergunta, fotoUrl: "", opcoes: q.opcoes.map((texto, i) => ({ id: `o${i}`, texto, correta: i === q.correta })), feedbackAcerto: q.explicacao, feedbackErro: q.explicacao })),
    selo: { nome: `Selo ${config.tema}`, subtitulo: "Missão concluída", emoji: "🏅", cor: "from-emerald-400 via-green-500 to-cyan-700" }, falaFinal: "Habilidade consolidada.",
  };
  aula.recompensa = { xp: 150, moedas: 30, medalha: config.titulo };
  return aula as AulaGeoV1;
}
