/**
 * Sondagem Inicial — 3º Ano (Fase 7)
 * ------------------------------------------------------------------
 * 8 itens falados, calibrados para 8 anos. Parte do que o 2º ano já
 * consolidou (ortografia regular, pontuação) e sobe até acentuação,
 * inferência, ideia principal e distinção fato/opinião — que é o
 * coração do 3º ano. O resultado NÃO trava nada: apenas sugere a
 * unidade de entrada no Clube dos Detetives da Palavra.
 */
import type { ItemSondagem, ResultadoSondagem } from "./sondagem-inicial";

export const ITENS_SONDAGEM_3ANO: ItemSondagem[] = [
  {
    id: "s1",
    fala: "Toque na palavra escrita do jeito certo: o som de erre forte no meio de carro.",
    pergunta: "Qual está escrita do jeito certo?",
    opcoes: ["CARO", "CARRO", "CARHO", "KARRO"],
    correta: 1,
    habilidade: "Ortografia contextual: R e RR",
  },
  {
    id: "s2",
    fala: "O som de esse entre duas vogais, em passeio. Toque no jeito certo.",
    pergunta: "Qual está certa?",
    opcoes: ["PASEIO", "PASSEIO", "PAÇEIO", "PAZEIO"],
    correta: 1,
    habilidade: "Ortografia contextual: S/SS/Ç",
  },
  {
    id: "s3",
    fala: "Qual palavra tem a batida forte na última sílaba?",
    pergunta: "Qual é oxítona (forte no FIM)?",
    opcoes: ["CAFÉ", "SÁBADO", "BONECA", "MÚSICA"],
    correta: 0,
    habilidade: "Sílaba tônica e classificação",
  },
  {
    id: "s4",
    fala: "Qual palavra precisa de acento?",
    pergunta: "Qual palavra está escrita CERTA, com acento?",
    opcoes: ["sofa", "sofá", "sófa", "soffá"],
    correta: 1,
    habilidade: "Acento em oxítona terminada em A",
  },
  {
    id: "s5",
    fala:
      "Ouça: A MOCHILA DE MARINA ESTAVA PINGANDO NO CORREDOR. O que provavelmente aconteceu?",
    pergunta: "O que provavelmente aconteceu?",
    opcoes: [
      "Marina caiu na piscina",
      "Marina veio na chuva",
      "Marina lavou a mochila",
      "Marina esqueceu a mochila",
    ],
    correta: 1,
    habilidade: "Inferência (informação implícita)",
  },
  {
    id: "s6",
    fala:
      "Ouça: AS ABELHAS LEVAM PÓLEN DE FLOR EM FLOR E AJUDAM AS PLANTAS A NASCER. Qual é a ideia principal?",
    pergunta: "Qual é a IDEIA PRINCIPAL?",
    opcoes: [
      "As abelhas ajudam as plantas a nascer",
      "As abelhas são amarelas",
      "As flores são bonitas",
      "As abelhas voam alto",
    ],
    correta: 0,
    habilidade: "Ideia principal do texto",
  },
  {
    id: "s7",
    fala: "Qual destas frases é uma OPINIÃO, e não um fato?",
    pergunta: "Qual frase é OPINIÃO?",
    opcoes: [
      "O jogo terminou 3 a 1",
      "Eu acho que foi o jogo mais bonito do ano",
      "O jogo foi no domingo",
      "O time usou camisa azul",
    ],
    correta: 1,
    habilidade: "Fato × opinião",
  },
  {
    id: "s8",
    fala: "Qual frase de diálogo está com a pontuação certa?",
    pergunta: "Qual está com a pontuação de fala certa?",
    opcoes: [
      "— Você viu a joia? perguntou Marina.",
      "— Você viu a joia? — perguntou Marina.",
      "Você viu a joia — perguntou Marina?",
      "— você viu a joia — perguntou marina.",
    ],
    correta: 1,
    habilidade: "Pontuação do discurso direto (travessão)",
  },
];

export function avaliarSondagem3ano(
  respostas: number[],
): Omit<ResultadoSondagem, "feitoEm"> {
  let acertos = 0;
  const erros: string[] = [];
  ITENS_SONDAGEM_3ANO.forEach((item, i) => {
    if (respostas[i] === item.correta) acertos += 1;
    else erros.push(item.habilidade);
  });

  const total = ITENS_SONDAGEM_3ANO.length;

  if (acertos <= 2) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-2",
      tituloUnidade: "Unidade 2 — O Laboratório das Letras",
      mensagem:
        "Vamos firmar primeiro a escrita das palavras: R/RR, S/SS/Ç e os sons do nariz. Com a mão firme, a leitura voa depois.",
      erros,
    };
  }
  if (acertos <= 4) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-7",
      tituloUnidade: "Unidade 7 — A Oficina da Escrita Certa",
      mensagem:
        "Você já escreve bem! Bora afinar ortografia, sílaba tônica e acento na oficina do clube.",
      erros,
    };
  }
  if (acertos <= 6) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-1",
      tituloUnidade: "Unidade 1 — O Clube dos Detetives da Palavra",
      mensagem:
        "Sua escrita está boa. Agora o desafio é ler entre as linhas: pistas, ideia principal e conclusão.",
      erros,
    };
  }
  return {
    acertos,
    total,
    unidadeSugerida: "unidade-8",
    tituloUnidade: "Unidade 8 — A Redação do Clube",
    mensagem:
      "Uau! Você lê e entende muito bem. Vamos direto produzir textos de verdade: carta, receita, anúncio e relatório.",
    erros,
  };
}
