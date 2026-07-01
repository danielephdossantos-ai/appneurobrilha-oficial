/**
 * Política de Cotidiano — Escola Brilha
 *
 * Toda habilidade BNCC deve ser ensinada usando situações do dia a dia.
 * Contextos prioritários (nesta ordem de preferência):
 *   1. Família        2. Escola          3. Brincadeiras
 *   4. Animais        5. Natureza        6. Alimentação
 *   7. Esportes       8. Tecnologia      9. Cultura brasileira
 *
 * Evitar exemplos abstratos quando existe contexto real possível.
 * O checker abaixo NÃO bloqueia publicação — ele sinaliza aulas que
 * escaparam do padrão pra revisão pedagógica.
 */
import type { Aula } from "./types";

export type ContextoCotidiano =
  | "familia"
  | "escola"
  | "brincadeiras"
  | "animais"
  | "natureza"
  | "alimentacao"
  | "esportes"
  | "tecnologia"
  | "cultura_brasileira";

/** Palavras-gatilho por contexto (case-insensitive, sem acento). */
const GATILHOS: Record<ContextoCotidiano, string[]> = {
  familia: [
    "mae", "pai", "irma", "irmao", "avo", "avó", "vovo", "vovó", "vov",
    "tio", "tia", "primo", "prima", "familia", "casa", "em casa",
  ],
  escola: [
    "escola", "sala de aula", "professora", "professor", "colega",
    "caderno", "mochila", "recreio", "lousa", "quadro", "carteira",
  ],
  brincadeiras: [
    "brincad", "brinca", "brincar", "jogo", "jogar", "pique", "amareli",
    "esconde-esconde", "peteca", "boneca", "carrinho", "bolinha de gude",
    "pipa", "corda", "elastico", "queimada",
  ],
  animais: [
    "cachorro", "gato", "gatinho", "cachorrinho", "passar", "passaro",
    "peixe", "vaca", "cavalo", "galinha", "coelho", "tartaruga", "animal",
    "bicho", "borboleta", "formiga",
  ],
  natureza: [
    "arvore", "flor", "folha", "rio", "mata", "floresta", "praia", "mar",
    "sol", "chuva", "nuvem", "terra", "planta", "horta", "jardim", "vento",
  ],
  alimentacao: [
    "fruta", "banana", "maca", "maçã", "laranja", "arroz", "feijao",
    "pao", "pão", "leite", "biscoito", "bolo", "sorvete", "pizza",
    "merenda", "lanche", "cozinha", "receita", "comida",
  ],
  esportes: [
    "futebol", "bola", "gol", "time", "quadra", "campo", "corrida",
    "correr", "natacao", "voleibol", "volei", "basquete", "handebol",
    "skate", "bicicleta", "bike", "ciclismo",
  ],
  tecnologia: [
    "celular", "tablet", "computador", "video", "youtube", "app", "aplicativo",
    "internet", "jogo do celular", "controle remoto", "mensagem", "audio",
    "camera", "foto",
  ],
  cultura_brasileira: [
    "carnaval", "junina", "festa junina", "sao joao", "são joão", "samba",
    "capoeira", "forro", "forró", "frevo", "boi bumba", "boi-bumba",
    "amazonia", "amazônia", "cerrado", "caatinga", "pantanal", "acaraje",
    "tapioca", "cuscuz", "brigadeiro", "pao de queijo", "pão de queijo",
    "folclore", "saci", "curupira", "iara", "boitata",
  ],
};

function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function textoTotalDaAula(a: Aula): string {
  const partes: string[] = [
    a.missao,
    a.explicacao,
    a.exemploResolvido.enunciado,
    ...a.exemploResolvido.passos,
    a.atividadeGuiada.enunciado,
    a.atividadeGuiada.explicacao,
    ...a.exercicios.map((e) => `${e.enunciado} ${e.resposta} ${e.dica ?? ""}`),
    a.desafio.enunciado,
    ...a.quiz.flatMap((q) => [q.pergunta, ...q.opcoes, q.explicacao]),
    ...a.revisao.pontos,
    a.revisao.dica,
    a.conclusao,
  ];
  return normalizar(partes.join(" \n "));
}

/** Detecta quais contextos do cotidiano a aula efetivamente usa. */
export function detectarContextosCotidiano(a: Aula): ContextoCotidiano[] {
  const texto = textoTotalDaAula(a);
  const encontrados: ContextoCotidiano[] = [];
  (Object.keys(GATILHOS) as ContextoCotidiano[]).forEach((cat) => {
    if (GATILHOS[cat].some((g) => texto.includes(normalizar(g)))) {
      encontrados.push(cat);
    }
  });
  return encontrados;
}

export type CotidianoCheck = {
  ok: boolean;
  contextos: ContextoCotidiano[];
  avisos: string[];
};

/**
 * Aula é considerada contextualizada quando:
 *   - Usa pelo menos 1 dos 9 contextos prioritários no texto geral, E
 *   - Pelo menos 1 dos exercicios OU o desafio referencia contexto.
 */
export function checarCotidiano(a: Aula): CotidianoCheck {
  const contextos = detectarContextosCotidiano(a);
  const avisos: string[] = [];

  if (contextos.length === 0) {
    avisos.push(
      "Aula sem contexto do cotidiano detectado. Revise usando família, escola, brincadeiras, animais, natureza, alimentação, esportes, tecnologia ou cultura brasileira.",
    );
  }

  const textoPratica = normalizar(
    [
      a.exemploResolvido.enunciado,
      a.atividadeGuiada.enunciado,
      ...a.exercicios.map((e) => e.enunciado),
      a.desafio.enunciado,
    ].join(" "),
  );
  const praticaTemContexto = (Object.keys(GATILHOS) as ContextoCotidiano[]).some(
    (cat) => GATILHOS[cat].some((g) => textoPratica.includes(normalizar(g))),
  );
  if (!praticaTemContexto) {
    avisos.push(
      "Exemplo, prática guiada, exercícios e desafio parecem abstratos. Traga pelo menos 1 situação real (ex.: 'contar as bananas da fruteira', 'somar os gols do time').",
    );
  }

  return { ok: avisos.length === 0, contextos, avisos };
}

export const CONTEXTOS_PRIORITARIOS: {
  id: ContextoCotidiano;
  rotulo: string;
}[] = [
  { id: "familia", rotulo: "Família" },
  { id: "escola", rotulo: "Escola" },
  { id: "brincadeiras", rotulo: "Brincadeiras" },
  { id: "animais", rotulo: "Animais" },
  { id: "natureza", rotulo: "Natureza" },
  { id: "alimentacao", rotulo: "Alimentação" },
  { id: "esportes", rotulo: "Esportes" },
  { id: "tecnologia", rotulo: "Tecnologia" },
  { id: "cultura_brasileira", rotulo: "Cultura brasileira" },
];
