/**
 * Sondagem Inicial — 2º Ano (Fase 7)
 * ------------------------------------------------------------------
 * 8 itens falados, calibrados para 7 anos: parte de decodificação já
 * adquirida (sílaba, palavra) e sobe até ortografia regular, pontuação
 * e compreensão de parágrafo. O resultado NÃO trava nada — apenas
 * sugere a unidade de entrada na Biblioteca Encantada.
 */
import type { ItemSondagem, ResultadoSondagem } from "./sondagem-inicial";

export const ITENS_SONDAGEM_2ANO: ItemSondagem[] = [
  {
    id: "s1",
    fala: "Toque na palavra sapato.",
    pergunta: "Onde está SAPATO?",
    opcoes: ["SAPATO", "SABONETE", "SAPINHO", "SALADA"],
    correta: 0,
    habilidade: "Leitura de palavra de 3 sílabas",
  },
  {
    id: "s2",
    fala: "Qual palavra tem a batida forte na sílaba do meio? Boneca, sábado ou caju?",
    pergunta: "Qual tem a batida forte no MEIO?",
    opcoes: ["BONECA", "SÁBADO", "CAJU", "PÉ"],
    correta: 0,
    habilidade: "Sílaba tônica",
  },
  {
    id: "s3",
    fala: "Qual palavra rima com panela?",
    pergunta: "Qual rima com PANELA?",
    opcoes: ["JANELA", "PANELÃO", "PANO", "MESA"],
    correta: 0,
    habilidade: "Rimas",
  },
  {
    id: "s4",
    fala: "Antes de pê e bê usamos qual letra? Toque na palavra escrita do jeito certo.",
    pergunta: "Qual está escrita do jeito certo?",
    opcoes: ["CANPO", "CAMPO", "CAMNPO", "CANMPO"],
    correta: 1,
    habilidade: "Ortografia: M antes de P e B",
  },
  {
    id: "s5",
    fala: "O som de erre forte no meio da palavra. Toque no jeito certo de escrever carro.",
    pergunta: "Qual está certo?",
    opcoes: ["CARO", "CARRO", "CAROO", "KARRO"],
    correta: 1,
    habilidade: "Ortografia: R e RR",
  },
  {
    id: "s6",
    fala: "Toque na palavrinha teimosa porque.",
    pergunta: "Onde está PORQUE?",
    opcoes: ["PORQUE", "PORQUÊM", "PROQUE", "PORQUI"],
    correta: 0,
    habilidade: "Palavra de alta frequência (irregular)",
  },
  {
    id: "s7",
    fala:
      "Qual frase está com a pontuação certa para uma pergunta?",
    pergunta: "Qual frase é uma PERGUNTA bem escrita?",
    opcoes: [
      "Você quer brincar.",
      "Você quer brincar?",
      "você quer brincar?",
      "Você quer brincar!",
    ],
    correta: 1,
    habilidade: "Pontuação e maiúscula inicial",
  },
  {
    id: "s8",
    fala:
      "Ouça: LUCAS ESQUECEU O GUARDA-CHUVA E VOLTOU PARA CASA MOLHADO. Por que Lucas ficou molhado?",
    pergunta:
      "LUCAS ESQUECEU O GUARDA-CHUVA E VOLTOU PARA CASA MOLHADO. Por quê?",
    opcoes: [
      "Porque caiu na piscina",
      "Porque esqueceu o guarda-chuva",
      "Porque tomou banho",
      "Porque estava com sede",
    ],
    correta: 1,
    habilidade: "Compreensão: causa e efeito",
  },
];

export function avaliarSondagem2ano(
  respostas: number[],
): Omit<ResultadoSondagem, "feitoEm"> {
  let acertos = 0;
  const erros: string[] = [];
  ITENS_SONDAGEM_2ANO.forEach((item, i) => {
    if (respostas[i] === item.correta) acertos += 1;
    else erros.push(item.habilidade);
  });

  const total = ITENS_SONDAGEM_2ANO.length;

  if (acertos <= 2) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-7",
      tituloUnidade: "Unidade 7 — A Oficina dos Sons",
      mensagem:
        "Vamos afinar o ouvido primeiro: batida forte, rimas e troca de sons. Depois a leitura fica muito mais fácil.",
      erros,
    };
  }
  if (acertos <= 4) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-3",
      tituloUnidade: "Unidade 3 — A Oficina das Palavras",
      mensagem:
        "Você já lê palavras! Bora treinar sílabas, alfabeto e escrita com mais firmeza.",
      erros,
    };
  }
  if (acertos <= 6) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-4",
      tituloUnidade: "Unidade 4 — Detetives da Leitura",
      mensagem:
        "Sua leitura está boa. Agora vamos caçar pistas, ideia principal e entrelinhas nos textos.",
      erros,
    };
  }
  return {
    acertos,
    total,
    unidadeSugerida: "unidade-6",
    tituloUnidade: "Unidade 6 — A Academia dos Grandes Leitores",
    mensagem:
      "Uau! Você já lê e entende muito bem. Vamos direto para os desafios de leitor experiente.",
    erros,
  };
}
