import type { AulaPortuguesV4 } from "../types";
import { aula03 as aulaBase } from "./unidade-2/aula-03-transportes-e-comunicacao";

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

export function criarAulaGeografia(config: Config): AulaPortuguesV4 {
  const aula = structuredClone(aulaBase) as any;
  aula.slug = config.slug;
  aula.titulo = config.titulo;
  aula.iconeTrilha = config.icone;
  aula.bncc = config.bncc;
  aula.duracaoMin = 25;
  const imagens = collectImages(aula);
  aula.momento01_motivacao = {
    titulo: config.titulo,
    historia: config.explicacao,
    imagemUrl: imagens[0] ?? "",
  };
  aula.momento02_previsao.instrucao = `Observe as pistas sobre ${config.tema}.`;
  aula.momento02_previsao.bloco.titulo = config.titulo;
  aula.momento02_previsao.bloco.recado.linhas = ["MISSÃO DE GEOGRAFIA", "", config.missao];
  aula.momento02_previsao.bloco.pergunta = config.questoes[0].pergunta;
  aula.momento02_previsao.bloco.hipoteses = config.questoes[0].opcoes.map((texto, i) => ({
    texto,
    imagemUrl: imagens[i % imagens.length] ?? "",
  }));
  aula.momento02_previsao.bloco.respostaCerta = config.questoes[0].correta;
  aula.momento02_previsao.bloco.feedbackAcerto = config.questoes[0].explicacao;
  aula.momento02_previsao.bloco.feedbackErro = `Observe novamente. ${config.questoes[0].explicacao}`;
  aula.momento03_vocabulario = {
    instrucao: "Conheça três palavras importantes.",
    cards: config.vocabulario.map((palavra, i) => ({
      palavra,
      explicacao: config.conceito,
      exemplo: config.exemplo,
      imagemUrl: imagens[i % imagens.length] ?? "",
    })),
  };
  aula.momento04_leituraGuiada = {
    instrucao: "Leia com Aurora e compare os exemplos.",
    leitura: {
      titulo: config.titulo,
      imagemUrl: imagens[0] ?? "",
      legendaImagem: config.tema,
      destacar: config.vocabulario,
      paragrafos: [config.conceito, config.explicacao, config.exemplo],
    },
  };
  const perguntas = config.questoes.map((q, i) => ({
    pergunta: q.pergunta,
    opcoes: q.opcoes,
    correta: q.correta,
    feedbackAcerto: q.explicacao,
    feedbackErro: `Releia: ${q.explicacao}`,
    ondeEstaNoTexto: config.explicacao,
    opcoesImagens: q.opcoes.map((_, j) => imagens[(i + j) % imagens.length] ?? ""),
  }));
  aula.momento05_compreensao = { instrucao: "Escolha entre quatro respostas.", perguntas };
  aula.momento06_personagensCenario = {
    instrucao: "Aplique a ideia em novas situações.",
    perguntas,
  };
  aula.momento07_sequencia.bloco.instrucao = config.missao;
  aula.momento07_sequencia.bloco.itens = config.etapas.map((texto, i) => ({
    id: `e${i}`,
    texto,
    imagemUrl: imagens[i % imagens.length] ?? "",
  }));
  aula.momento07_sequencia.bloco.ordemCerta = ["e0", "e1", "e2", "e3"];
  aula.momento08_leituraIndependente.leitura.titulo = config.titulo;
  aula.momento08_leituraIndependente.leitura.paragrafos = [
    config.conceito,
    config.explicacao,
    config.exemplo,
  ];
  aula.momento08_leituraIndependente.perguntas = perguntas;
  aula.momento09_revisao.pontos = [config.conceito, config.explicacao, config.exemplo];
  aula.momento10_avaliacao.perguntas = perguntas;
  aula.momento11_missaoFamilia.titulo = `Missão em família: ${config.tema}`;
  aula.momento11_missaoFamilia.passos = config.etapas;
  return aula;
}

function collectImages(value: any): string[] {
  const out: string[] = [];
  const walk = (v: any) => {
    if (!v) return;
    if (typeof v === "object")
      for (const [k, x] of Object.entries(v)) {
        if (
          (k.endsWith("Url") || k.endsWith("Imagem")) &&
          typeof x === "string" &&
          x &&
          !out.includes(x)
        )
          out.push(x);
        else walk(x);
      }
  };
  walk(value);
  return out.length ? out : [""];
}
